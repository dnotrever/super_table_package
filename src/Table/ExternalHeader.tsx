import type { Table, Column } from '@tanstack/react-table';
import type { StickyInfo } from '../hooks/useStickyColumns';
import type { SortState, SelectableProps, ExpandableProps } from './Table.types';

import { isColumnResizable } from '../utils/isColumnResizable';
import { getColumnAlign } from '../utils/getColumnAlign';
import { ColGroup } from './ColGroup';

interface Props<T> {
    table: Table<T>;
    tableWidth: number;
    data: T[];
    stickyById: Map<string, StickyInfo>;
    resizableCol?: boolean;
    reorderableCol?: boolean;
    sortableCol?: boolean;
    sortState: SortState | null;
    setSortState: (next: SortState | null) => void;
    defaultTextAlign: 'left' | 'center' | 'right';
    selectable?: SelectableProps;
    selectedRows: Set<string | number>;
    disableSelectRow: (string | number)[];
    onDragStart?: (columnId: string, e: PointerEvent) => void;
    scrollRef?: (el: HTMLElement | null) => void;
    onResizeStart?: (e: React.MouseEvent, column: Column<T, unknown>) => void;
    setSelectedRows: React.Dispatch<React.SetStateAction<Set<string | number>>>;
    expandable?: ExpandableProps<T>;
    expandedRows: Set<string | number>;
    setExpandedRows: React.Dispatch<React.SetStateAction<Set<string | number>>>;
}

export function ExternalHeader<T>({
    table,
    tableWidth,
    data,
    stickyById,
    resizableCol = false,
    reorderableCol = false,
    sortableCol = true,
    sortState,
    setSortState,
    defaultTextAlign,
    selectable,
    selectedRows,
    disableSelectRow,
    onDragStart,
    scrollRef,
    onResizeStart,
    setSelectedRows,
    expandable,
    expandedRows,
    setExpandedRows,
}: Props<T>) {

    const allRowIds = data.map((row, index) => {
        if (typeof row === 'object' && row !== null && 'id' in row) {
            return (row as { id?: string | number }).id ?? index;
        }
        return index;
    });

    //================================================================
    // Selectable
    //================================================================

    const selectableEnabled = Boolean(selectable);
    const selectableLabel = selectable?.label;

    const selectableRowIds = allRowIds.filter(id => !disableSelectRow.includes(id));
    const selectedCount = selectableRowIds.filter(id => selectedRows.has(id)).length;
    const isAllSelected = selectedCount === selectableRowIds.length && selectableRowIds.length > 0;
    const isIndeterminate = selectedCount > 0 && selectedCount < selectableRowIds.length;

    const handleSelectAll = () => {
        setSelectedRows(prev => {
            const next = new Set(prev);
            if (isAllSelected) {
                selectableRowIds.forEach(id => next.delete(id));
            } else {
                selectableRowIds.forEach(id => next.add(id));
            }
            return next;
        });
    };

    //================================================================
    // Expandable
    //================================================================

    const expandableEnabled = Boolean(expandable);
    const expandableAllButton = expandable?.allButton || false;

    const isAllExpanded = allRowIds.every(id => expandedRows.has(id));

    const handleExpandAll = () => {
        setExpandedRows(isAllExpanded ? new Set() : new Set(allRowIds));
    };

    //================================================================
    // Return
    //================================================================

    return (
        <div className="table-scroll-sync" ref={scrollRef}>

            <table className="table table-external-header">

                <ColGroup
                    table={table}
                    tableWidth={tableWidth}
                />

                <thead>
                    {
                        table.getHeaderGroups().map(group => (

                            <tr key={group.id}>

                                {
                                    group.headers.map(header => {

                                        const meta = header.column.columnDef.meta;
                                        const sticky = stickyById.get(header.column.id);
                                        const align = getColumnAlign(header.column, defaultTextAlign);

                                        const canReorder =
                                            reorderableCol &&
                                            meta?.reorderable !== false &&
                                            !meta?.sticky;

                                        const canSort =
                                            (meta?.sortable ?? sortableCol) &&
                                            !meta?.sticky &&
                                            !['__draggable__', '__selectable__', '__expandable__']
                                                .includes(header.column.id);

                                        const isSorted = sortState?.columnId === header.column.id;

                                        const handleSortClick = () => {
                                            if (!canSort) return;
                                            let next: SortState | null;
                                            if (!sortState || sortState.columnId !== header.column.id) {
                                                next = { columnId: header.column.id, direction: 'asc' };
                                            } else if (sortState.direction === 'asc') {
                                                next = { columnId: header.column.id, direction: 'desc' };
                                            } else {
                                                next = null;
                                            }
                                            setSortState(next);
                                        };

                                        const className = [
                                            sticky ? 'is-sticky' : '',
                                            sticky?.side === 'left' ? 'is-sticky-left' : '',
                                            sticky?.side === 'right' ? 'is-sticky-right' : '',
                                            canSort ? 'is-sortable' : '',
                                            isSorted ? `is-sorted-${sortState!.direction}` : '',
                                        ].filter(Boolean).join(' ');

                                        const style = sticky
                                            ? (sticky.side === 'left'
                                                ? ({ ['--sticky-left' as never]: `${sticky.offset}px` } as React.CSSProperties)
                                                : ({ ['--sticky-right' as never]: `${sticky.offset}px` } as React.CSSProperties))
                                            : undefined;

                                        return (
                                            <th
                                                key={header.id}
                                                data-col-id={header.column.id}
                                                data-fixed={meta?.sticky ? 'true' : undefined}
                                                data-reorderable={!canReorder ? 'false' : undefined}
                                                className={className}
                                                style={style}
                                                onClick={handleSortClick}
                                            >

                                                <div className={`th-content align-${align}`}>

                                                    <div>
                                                        {header.isPlaceholder
                                                            ? null
                                                            : header.column.id === '__selectable__' && selectableEnabled ? (
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={isAllSelected}
                                                                        ref={el => {
                                                                            if (el) el.indeterminate = isIndeterminate;
                                                                        }}
                                                                        onChange={handleSelectAll}
                                                                    />
                                                                    {selectableLabel}
                                                                </label>
                                                            ) : header.column.id === '__expandable__' && expandableEnabled && expandableAllButton ? (
                                                                <button
                                                                    onClick={handleExpandAll}
                                                                    className={`expand-all-button ${isAllExpanded ? 'expanded' : ''}`}
                                                                >
                                                                    ⇅
                                                                </button>
                                                            ) : (
                                                                (() => {
                                                                    const h = header.column.columnDef.header;
                                                                    if (typeof h === 'function') {
                                                                        return h({ column: header.column, table, header });
                                                                    }
                                                                    return h;
                                                                })()
                                                            )
                                                        }
                                                    </div>

                                                    {canSort && <span className="sort-indicator" />}

                                                    {
                                                        canReorder && (
                                                            <span
                                                                className="col-drag-handle"
                                                                onClick={e => e.stopPropagation()}
                                                                onPointerDown={e => {
                                                                    e.preventDefault();
                                                                    e.currentTarget.setPointerCapture(e.pointerId);
                                                                    onDragStart?.(header.column.id, e.nativeEvent);
                                                                }}
                                                            >
                                                                ☰
                                                            </span>
                                                        )
                                                    }

                                                    {
                                                        resizableCol && onResizeStart && isColumnResizable(header.column) && (
                                                            <span
                                                                className="col-resize-handle"
                                                                onClick={e => e.stopPropagation()}
                                                                onMouseDown={e => onResizeStart(e, header.column)}
                                                            />
                                                        )
                                                    }

                                                </div>

                                            </th>
                                        );
                                    })
                                }

                            </tr>

                        ))
                    }
                </thead>

            </table>

        </div>
    );
}
