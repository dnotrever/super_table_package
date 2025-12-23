import type { Table } from '@tanstack/react-table';

import { parseSize } from '../utils/parseSize';

interface Props<T> {
    table: Table<T>;
    tableWidth: number;
}

export function ColGroup<T>({ table, tableWidth }: Props<T>) {

    const columns = table.getAllLeafColumns();

    const widths = columns.map(col =>
        parseSize(col.columnDef.meta?.widthSize)
    );

    const totalWidth = widths.reduce((sum, w) => sum + w, 0);
    const hasHorizontalScroll = totalWidth > tableWidth;

    return (
        <colgroup>
            {
                columns.map((col, index) => {

                    const meta = col.columnDef.meta;
                    const isLast = index === columns.length - 1;

                    let style: React.CSSProperties | undefined;

                    if (!hasHorizontalScroll && isLast) {
                        style = { width: 'auto' };
                    } else if (meta?.widthSize) {
                        style = { width: meta.widthSize };
                    }

                    return <col key={col.id} style={style} />;

                })
            }
        </colgroup>
    );

}
