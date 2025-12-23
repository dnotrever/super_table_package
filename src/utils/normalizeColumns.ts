import type {
    ColumnDef,
    AccessorColumnDef,
} from '@tanstack/react-table';

function hasAccessorKey<T>(
    col: ColumnDef<T, unknown>
): col is AccessorColumnDef<T, unknown> & { accessorKey: string } {
    return (
        'accessorKey' in col &&
        typeof col.accessorKey === 'string'
    );
}

export function normalizeColumns<T>(
    columns: ColumnDef<T, unknown>[]
): ColumnDef<T, unknown>[] {
    return columns.map(col => {
        if (col.id) {
            return col;
        }
        if (hasAccessorKey(col)) {
            return {
                ...col,
                id: col.accessorKey,
            };
        }
        throw new Error(
            'Columns sem id e sem accessorKey string. ' +
            'Defina um id explicitamente para esta coluna.'
        ); 
    });
}
