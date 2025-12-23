import React, { useMemo, useRef, useState } from 'react';
import type { Cell, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { ColGroup } from './ColGroup';
import type { StickyInfo } from '../hooks/useStickyColumns';
import type { SelectableProps, ExpandableProps } from './Table.types';
import { getColumnAlign } from '../utils/getColumnAlign';

interface Props<T> {
    table: Table<T>;
    tableWidth: number;
    stickyById: Map<string, StickyInfo>;
    defaultTextAlign: 'left' | 'center' | 'right';
    editable?: boolean;
    draggable?: boolean;
    setData?: React.Dispatch<React.SetStateAction<T[]>>;
    setInternalData: React.Dispatch<React.SetStateAction<T[]>>;
    selectable?: SelectableProps;
    selectedRows: Set<string | number>;
    setSelectedRows: React.Dispatch<React.SetStateAction<Set<string | number>>>;
    disableSelectRow: (string | number)[];
    expandable?: ExpandableProps<T>;
    expandedRows: Set<string | number>;
    setExpandedRows: React.Dispatch<React.SetStateAction<Set<string | number>>>;
    stripedRows?: boolean;
    hoverableRow?: boolean;
}

export function Body<T>({
    table,
    tableWidth,
    stickyById,
    defaultTextAlign,
    editable = false,
    draggable = false,
    setData,
    setInternalData,
    selectable,
    selectedRows,
    setSelectedRows,
    disableSelectRow,
    expandable,
    expandedRows,
    setExpandedRows,
    stripedRows = false,
    hoverableRow = false,
}: Props<T>) {

    //================================================================
    // Row State Setter
    //================================================================

    const setRows = useMemo(
        () => setData ?? setInternalData,
        [setData, setInternalData]
    );

    //================================================================
    // Draggable
    //================================================================

    const startYRef = useRef<number | null>(null);
    const draggingIndexRef = useRef<number | null>(null);

    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
    const [dragOffsetY, setDragOffsetY] = useState<number>(0);

    const onPointerDown = (index: number, e: React.PointerEvent) => {
        if (!draggable) return;

        e.preventDefault();

        startYRef.current = e.clientY;
        draggingIndexRef.current = index;

        setDraggingIndex(index);
        setDragOffsetY(0);

        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!draggable) return;
        if (
            startYRef.current === null ||
            draggingIndexRef.current === null
        ) return;

        const deltaY = e.clientY - startYRef.current;
        setDragOffsetY(deltaY);

        const rowHeight = 32;
        const direction =
            deltaY > rowHeight
                ? 1
                : deltaY < -rowHeight
                    ? -1
                    : 0;

        if (direction === 0) return;

        const fromIndex = draggingIndexRef.current;
        const toIndex = fromIndex + direction;

        if (
            toIndex < 0 ||
            toIndex >= table.getRowModel().rows.length
        ) return;

        setRows(prev => {
            const next = [...prev];
            const [item] = next.splice(fromIndex, 1);
            next.splice(toIndex, 0, item);
            return next;
        });

        draggingIndexRef.current = toIndex;
        startYRef.current = e.clientY;

        setDragOffsetY(0);
        setDraggingIndex(toIndex);
    };

    const onPointerUp = () => {
        startYRef.current = null;
        draggingIndexRef.current = null;

        setDraggingIndex(null);
        setDragOffsetY(0);
    };

    //================================================================
    // Editable
    //================================================================

    const [editingCell, setEditingCell] = useState<{
        rowId: string;
        colId: string;
    } | null>(null);

    const [editValue, setEditValue] = useState<string>('');

    const startEdit = (cell: Cell<T, unknown>) => {
        setEditingCell({
            rowId: cell.row.id,
            colId: cell.column.id,
        });

        setEditValue(String(cell.getValue() ?? ''));
    };

    const commitEdit = (cell: Cell<T, unknown>) => {
        setInternalData(prev =>
            prev.map((row, index) =>
                index === cell.row.index
                    ? ({
                        ...(row as object),
                        [cell.column.id]: editValue,
                    } as T)
                    : row
            )
        );

        setEditingCell(null);
    };

    //================================================================
    // Expandable
    //================================================================

    const handleRowClick = (e: React.MouseEvent, row: any) => {
        if (!expandable || !expandable.clickRow) return;
        if ((e.target as HTMLElement).closest('.col-drag-handle')) return;
        if ((e.target as HTMLElement).tagName === 'INPUT' && (e.target as HTMLInputElement).type === 'checkbox') return;
        if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') return;
        if ((e.target as HTMLElement).tagName === 'INPUT' && editingCell) return;
        const rowId = (row.original as any).id ?? row.index;
        setExpandedRows(prev => {
            const next = new Set(prev);
            if (next.has(rowId)) {
                next.delete(rowId);
            } else {
                next.add(rowId);
            }
            return next;
        });
    };

    //================================================================
    // Return
    //================================================================

    return (
        <table className={`table table-body ${hoverableRow ? "hoverable" : ""} ${stripedRows ? "striped" : ""}`}>

            <ColGroup
                table={table}
                tableWidth={tableWidth}
            />

            <tbody>
                {
                    table.getRowModel().rows.map(row => {

                        const realIndex = row.index;
                        const isDragging = draggingIndex === realIndex;

                        const rowElements: React.ReactElement[] = [];

                        rowElements.push(
                            <tr
                                key={row.id}
                                className={`${isDragging ? 'row-dragging' : ''}`}
                                style={
                                    isDragging
                                        ? {
                                            transform: `translateY(${dragOffsetY}px)`,
                                            position: 'relative',
                                            zIndex: 50,
                                        }
                                        : undefined
                                }
                                onPointerMove={onPointerMove}
                                onPointerUp={onPointerUp}
                                onClick={(e) => handleRowClick(e, row)}
                            >
                                {
                                    row.getVisibleCells().map(cell => {

                                        const colId = cell.column.id;
                                        const sticky = stickyById.get(colId);
                                        const align = getColumnAlign(cell.column, defaultTextAlign);

                                        const isEditing =
                                            editingCell?.rowId === row.id &&
                                            editingCell?.colId === colId;

                                        const className = [
                                            sticky ? 'is-sticky' : '',
                                            sticky?.side === 'left' ? 'is-sticky-left' : '',
                                            sticky?.side === 'right' ? 'is-sticky-right' : '',
                                        ]
                                            .filter(Boolean)
                                            .join(' ');

                                        const style = sticky
                                            ? sticky.side === 'left'
                                                ? ({ ['--sticky-left' as never]: `${sticky.offset}px` } as React.CSSProperties)
                                                : ({ ['--sticky-right' as never]: `${sticky.offset}px` } as React.CSSProperties)
                                            : undefined;

                                        if (cell.column.id === '__draggable__' && draggable) {
                                            return (
                                                <td
                                                    key={cell.id}
                                                    className={`${className} align-center col-drag-handle`}
                                                    style={style}
                                                    onPointerDown={e => onPointerDown(realIndex, e)}
                                                >
                                                    ☰
                                                </td>
                                            );
                                        }

                                        if (cell.column.id === '__selectable__' && selectable) {
                                            const rowId = (cell.row.original as any).id ?? cell.row.index;
                                            const isDisabled = disableSelectRow.includes(rowId);
                                            const isSelected = selectedRows.has(rowId);
                                            return (
                                                <td
                                                    key={cell.id}
                                                    className={`${className} align-center`}
                                                    style={style}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        disabled={isDisabled}
                                                        onChange={() => {
                                                            setSelectedRows(prev => {
                                                                const next = new Set(prev);
                                                                if (next.has(rowId)) {
                                                                    next.delete(rowId);
                                                                } else {
                                                                    next.add(rowId);
                                                                }
                                                                return next;
                                                            });
                                                        }}
                                                    />
                                                </td>
                                            );
                                        }

                                        if (cell.column.id === '__expandable__' && expandable) {
                                            const rowId = (cell.row.original as any).id ?? cell.row.index;
                                            const isExpanded = expandedRows.has(rowId);
                                            return (
                                                <td
                                                    key={cell.id}
                                                    className={`${className} align-center`}
                                                    style={style}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedRows(prev => {
                                                            const next = new Set(prev);
                                                            if (next.has(rowId)) {
                                                                next.delete(rowId);
                                                            } else {
                                                                next.add(rowId);
                                                            }
                                                            return next;
                                                        });
                                                    }}
                                                >
                                                    <span
                                                        className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                                                        style={{
                                                            display: 'inline-block',
                                                            transition: 'transform 0.2s',
                                                            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                                            cursor: 'pointer',
                                                            fontSize: '12px',
                                                        }}
                                                    >
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </span>
                                                </td>
                                            );
                                        }

                                        return (
                                            <td
                                                key={cell.id}
                                                className={`${className} align-${align}`}
                                                style={style}
                                                onDoubleClick={() => {
                                                    if (!editable) return;
                                                    startEdit(cell);
                                                }}
                                            >
                                                {
                                                    isEditing ? (
                                                        <input
                                                            autoFocus
                                                            value={editValue}
                                                            onChange={e => setEditValue(e.target.value)}
                                                            onBlur={() => commitEdit(cell)}
                                                            onKeyDown={e => {
                                                                if (e.key === 'Enter') commitEdit(cell);
                                                                if (e.key === 'Escape') setEditingCell(null);
                                                            }}
                                                            onFocus={e => e.currentTarget.select()}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                boxSizing: 'border-box',
                                                                fontSize: 'inherit',
                                                                fontFamily: 'inherit',
                                                            }}
                                                        />
                                                    ) : (
                                                        flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )
                                                    )
                                                }
                                            </td>
                                        );

                                    })
                                }
                            </tr>
                        );

                        if (expandable && expandable.content && expandedRows.has((row.original as any).id ?? row.index)) {
                            rowElements.push(
                                <tr key={`${row.id}-expanded`} className="expanded-row">
                                    <td colSpan={table.getAllColumns().length} className="expanded-content">
                                        {expandable.content(row.original)}
                                    </td>
                                </tr>
                            );
                        }

                        return rowElements;

                    }).flat()
                }
            </tbody>

        </table>
    );

}
