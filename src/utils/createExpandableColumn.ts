import type { Columns } from '../Table/Table.types';

export function createExpandableColumn<T>(
    sticky?: boolean
): Columns<T> {
    return {
        id: '__expandable__',
        header: '',
        accessorFn: () => null,
        meta: {
            widthSize: '36px',
            sticky: sticky ? 'left' : undefined,
            resizable: false,
            reorderable: false,
            textAlign: 'center',
        },
        cell: () => null,
    };
}