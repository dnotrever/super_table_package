import type { Column } from '@tanstack/react-table';

export function isColumnResizable<T>(
    column: Column<T, unknown>
): boolean {
    const meta = column.columnDef.meta;
    if (meta?.resizable === false) {
        return false;
    }
    if (meta?.sticky && meta.resizable !== true) {
        return false;
    }
    return true;
}
