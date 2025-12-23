import { useState, useRef, useLayoutEffect, useCallback, useEffect, useMemo } from 'react';

import SimpleBar from 'simplebar-react';
import type SimpleBarCore from 'simplebar-core';
import 'simplebar-react/dist/simplebar.min.css';

import type { TabelaProps, Columns, SortState } from './Table.types';
import '../styles/Table.scss';

import { useTable } from '../hooks/useTable';
import { useTableWidth } from '../hooks/useTableWidth';
import { useHorizontalScrollSync } from '../hooks/useHorizontalScrollSync';
import { useColumnResize } from '../hooks/useColumnResize';
import { useHorizontalOverflow } from '../hooks/useHorizontalOverflow';
import { useStickyColumns } from '../hooks/useStickyColumns';
import { useColumnReorderGhost } from '../hooks/useColumnReorderGhost';

import { normalizeColumns } from '../utils/normalizeColumns';
import { createDraggableColumn } from '../utils/createDraggableColumn';
import { createSelectableColumn } from '../utils/createSelectableColumn';
import { createExpandableColumn } from '../utils/createExpandableColumn';

import {
    ExternalHeader,
    InternalHeader,
    Body,
    InternalFooter,
    ExternalFooter,
    Pagination,
} from '.';

export function Table<T>({
    header,
    data,
    footer,
    tableHeight = '400px',
    resizableCol = false,
    reorderableCol = false,
    sortableCol = true,
    onSortChange,
    onDataChange,
    stripedRows = false,
    defaultTextAlign = 'left',
    editable = false,
    draggable = false,
    draggableSticky = false,
    selectable,
    expandable,
    pagination,
    hoverableRow,
    borders,
}: TabelaProps<T>) {

    //================================================================
    // Refs
    //================================================================

    const simpleBarRef = useRef<SimpleBarCore | null>(null);

    const setSimpleBarInstance = useCallback(
        (instance: SimpleBarCore | null) => {
            simpleBarRef.current = instance;
        },
        []
    );

    //================================================================
    // SORTING (UI only)
    //================================================================

    const [sortState, setSortState] = useState<SortState | null>(null);

    const handleSortChange = useCallback(
        (next: SortState | null) => {
            setSortState(next);
            onSortChange?.(next); // 🔥 IGUAL PAGINAÇÃO
        },
        [onSortChange]
    );

    //================================================================
    // Scroll & Layout Sync
    //================================================================

    const {
        bodyRef,
        registerSyncElement,
        onBodyScroll,
    } = useHorizontalScrollSync();

    const tableWidth = useTableWidth(bodyRef);
    const hasHorizontalOverflow = useHorizontalOverflow(bodyRef);

    //================================================================
    // Column Width
    //================================================================

    const [columnWidths, setColumnWidths] = useState<Record<string, string>>({});

    //================================================================
    // Selectable
    //================================================================

    const initialSelectedSet = useMemo(
        () => new Set(selectable?.initialSelectRow || []),
        [selectable?.initialSelectRow]
    );

    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(initialSelectedSet);

    //================================================================
    // Expandable
    //================================================================

    const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());

    //================================================================
    // Column Definitions (Normalization)
    //================================================================

    const normalizedColumns = useMemo(
        () =>
            normalizeColumns(
                (() => {
                    const cols: Columns<T>[] = [];
                    if (draggable) cols.push(createDraggableColumn<T>(draggableSticky));
                    if (selectable) cols.push(createSelectableColumn<T>(
                        selectable.sticky,
                        selectable.label
                    ));
                    if (expandable) cols.push(createExpandableColumn<T>(expandable.sticky));
                    return [...cols, ...header];
                })()
            ),
        [
            header,
            draggable,
            draggableSticky,
            selectable,
            expandable,
        ]
    );

    //================================================================
    // Orderable Columns
    //================================================================

    const [columnOrder, setColumnOrder] = useState<string[]>(() =>
        normalizedColumns.map(col => col.id!)
    );

    //================================================================
    // Table Data (SERVER-SIDE SORTED)
    //================================================================

    const [internalData, setInternalData] = useState<T[]>(data);

    useEffect(() => {
        setInternalData(data);
    }, [data]);

    useEffect(() => {
        onDataChange?.(internalData);
    }, [internalData, onDataChange]);

    //================================================================
    // Column Metadata (Widths)
    //================================================================

    const tableColumns = useMemo(
        () =>
            normalizedColumns.map(col => ({
                ...col,
                meta: {
                    ...col.meta,
                    widthSize:
                        columnWidths[col.id!] ?? col.meta?.widthSize,
                },
            })),
        [normalizedColumns, columnWidths]
    );

    //================================================================
    // Table Instance
    //================================================================

    const table = useTable<T>(
        tableColumns,
        internalData,
        columnOrder,
        setColumnOrder
    );

    //================================================================
    // Sticky Columns
    //================================================================

    const stickyById = useStickyColumns(table);

    //================================================================
    // Column Resize
    //================================================================

    const { startResize } = useColumnResize<T>({
        onResize: (columnId, width) => {
            setColumnWidths(prev => ({
                ...prev,
                [columnId]: `${width}px`,
            }));
        },
        onResizeEnd: () => {
            requestAnimationFrame(() => {
                simpleBarRef.current?.recalculate();
            });
        },
    });

    //================================================================
    // Column Reorder (Drag)
    //================================================================

    const { startDrag } = useColumnReorderGhost({
        setColumnOrder,
    });

    //================================================================
    // Layout Effects
    //================================================================

    useLayoutEffect(() => {
        simpleBarRef.current?.recalculate();
    }, [hasHorizontalOverflow]);

    //================================================================
    // Return
    //================================================================

    return (
        <div className={`table-wrapper borders-${borders}`} style={{ height: tableHeight }}>

            <ExternalHeader
                table={table}
                scrollRef={registerSyncElement}
                tableWidth={tableWidth}
                stickyById={stickyById}
                resizableCol={resizableCol}
                reorderableCol={reorderableCol}
                sortableCol={sortableCol}
                sortState={sortState}
                setSortState={handleSortChange}
                onResizeStart={startResize}
                onDragStart={startDrag}
                defaultTextAlign={defaultTextAlign}
                selectable={selectable}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                disableSelectRow={selectable?.disableSelectRow || []}
                data={data}
                expandable={expandable}
                expandedRows={expandedRows}
                setExpandedRows={setExpandedRows}
            />

            <div className="internal-table">

                <InternalHeader
                    table={table}
                    scrollRef={registerSyncElement}
                    tableWidth={tableWidth}
                    stickyById={stickyById}
                    defaultTextAlign={defaultTextAlign}
                />

                <div className={`table-body-area ${hasHorizontalOverflow ? 'has-h-scroll' : 'no-h-scroll'}`}>

                    <SimpleBar
                        ref={setSimpleBarInstance}
                        className="table-body-scroll"
                        scrollableNodeProps={{
                            ref: bodyRef,
                            onScroll: onBodyScroll,
                        }}
                    >

                        <Body
                            table={table}
                            tableWidth={tableWidth}
                            stickyById={stickyById}
                            defaultTextAlign={defaultTextAlign}
                            editable={editable}
                            draggable={draggable}
                            setData={setInternalData}
                            setInternalData={setInternalData}
                            selectable={selectable}
                            selectedRows={selectedRows}
                            setSelectedRows={setSelectedRows}
                            disableSelectRow={selectable?.disableSelectRow || []}
                            expandable={expandable}
                            expandedRows={expandedRows}
                            setExpandedRows={setExpandedRows}
                            stripedRows={stripedRows}
                            hoverableRow={hoverableRow}
                        />

                    </SimpleBar>

                    <InternalFooter
                        table={table}
                        scrollRef={registerSyncElement}
                        tableWidth={tableWidth}
                        stickyById={stickyById}
                        defaultTextAlign={defaultTextAlign}
                    />

                </div>

            </div>

            <ExternalFooter table={table}>
                {footer}
            </ExternalFooter>

            {
                pagination && (
                    <Pagination
                        currentPage={pagination.currentPage}
                        totalItems={pagination.totalItems}
                        pageSize={pagination.pageSize}
                        pageSizeOptions={pagination.pageSizeOptions}
                        onPageChange={pagination.onPageChange}
                    />
                )
            }

        </div>
    );

}
