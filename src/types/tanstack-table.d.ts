import '@tanstack/react-table';
import type { ReactNode } from 'react';

export type RenderNode =
    | ReactNode
    | (() => ReactNode);

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData, TValue> {
        widthSize?: string;
        internalHeader?: RenderNode;
        internalFooter?: RenderNode;
        resizable?: boolean;
        reorderable?: boolean;
        sortable?: boolean;
        sticky?: 'left' | 'right';
        textAlign?: 'left' | 'center' | 'right';
    }
}
