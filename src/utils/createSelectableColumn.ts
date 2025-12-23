import type { Columns } from '../Table/Table.types';

export function createSelectableColumn<T>(
    sticky?: boolean,
    label?: string
): Columns<T> {
    return {
        id: '__selectable__',
        header: label || '',
        accessorFn: () => null,
        meta: {
            widthSize: label ? '120px' : '36px',
            sticky: sticky ? 'left' : undefined,
            resizable: false,
            reorderable: false,
            textAlign: 'center',
        },
        cell: () => null,
    };
}