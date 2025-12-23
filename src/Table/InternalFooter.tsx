import type { Table } from '@tanstack/react-table';
import type { RenderNode } from './Table.types';
import { ColGroup } from './ColGroup';
import type { StickyInfo } from '../hooks/useStickyColumns';
import { getColumnAlign } from '../utils/getColumnAlign';

interface Props<T> {
    table: Table<T>;
    tableWidth: number;
    stickyById: Map<string, StickyInfo>;
    defaultTextAlign: 'left' | 'center' | 'right';
    scrollRef?: (el: HTMLElement | null) => void;
}

export function InternalFooter<T>({
    table,
    tableWidth,
    stickyById,
    defaultTextAlign,
    scrollRef,
}: Props<T>) {

    const columns = table.getAllLeafColumns();

    const hasInternalFooter = columns.some(
        col => col.columnDef.meta?.internalFooter != null
    );

    if (!hasInternalFooter) {
        return null;
    }

    return (
        <div className="table-scroll-sync" ref={scrollRef}>

            <table className="table table-internal-footer">

                <ColGroup
                    table={table}
                    tableWidth={tableWidth}
                />

                <tfoot>
                    <tr>
                        {
                            table.getAllLeafColumns().map(col => {

                                const valor: RenderNode | undefined = col.columnDef.meta?.internalFooter;

                                const sticky = stickyById.get(col.id);
                                const align = getColumnAlign(col, defaultTextAlign);

                                const className = [
                                    sticky ? 'is-sticky' : '',
                                    sticky?.side === 'left' ? 'is-sticky-left' : '',
                                    sticky?.side === 'right' ? 'is-sticky-right' : '',
                                ].filter(Boolean).join(' ');

                                const style = sticky
                                    ? (sticky.side === 'left'
                                        ? ({ ['--sticky-left' as never]: `${sticky.offset}px` } as React.CSSProperties)
                                        : ({ ['--sticky-right' as never]: `${sticky.offset}px` } as React.CSSProperties))
                                    : undefined;

                                return (
                                    <td
                                        key={col.id}
                                        className={`${className} align-${align}`}
                                        style={style}
                                    >
                                        {typeof valor === 'function' ? valor() : valor ?? null}
                                    </td>
                                );

                            })
                        }
                    </tr>
                </tfoot>

            </table>

        </div>
    );
}
