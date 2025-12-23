import {
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

import type { Columns } from '../Table/Table.types';

export function useTable<T>(
    colunas: Columns<T>[],
    data: T[],
    columnOrder: string[],
    setColumnOrder: React.Dispatch<React.SetStateAction<string[]>>
) {
    return useReactTable<T>({
        data: data,
        columns: colunas,
        state: {
            columnOrder,
        },
        onColumnOrderChange: setColumnOrder,
        getCoreRowModel: getCoreRowModel(),
    });
}
