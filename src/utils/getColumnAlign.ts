import type { Column } from '@tanstack/react-table';

export function getColumnAlign<T>(
    column: Column<T, unknown>,
    defaultTextAlign: 'left' | 'center' | 'right'
) {
    return column.columnDef.meta?.textAlign ?? defaultTextAlign;
}
