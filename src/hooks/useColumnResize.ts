import { useCallback, useRef } from 'react';
import type { Column } from '@tanstack/react-table';
import { parseSize } from '../utils/parseSize';

interface ResizeArgs {
    onResize: (columnId: string, width: number) => void;
    onResizeEnd?: () => void;
    minWidth?: number;
}

export function useColumnResize<T>({
    onResize,
    onResizeEnd,
    minWidth = 40,
}: ResizeArgs) {

    const startX = useRef(0);
    const startWidth = useRef(0);
    const columnId = useRef<string | null>(null);

    const onMouseMove = useCallback(
        (e: MouseEvent) => {

            if (!columnId.current) return;

            const delta = e.clientX - startX.current;
            const nextWidth = Math.max(minWidth, startWidth.current + delta);

            onResize(columnId.current, nextWidth);
            
        },
        [minWidth, onResize]
    );

    const onMouseUp = useCallback(() => {
        columnId.current = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        onResizeEnd?.();
    }, [onMouseMove, onResizeEnd]);

    const startResize = useCallback(
        (e: React.MouseEvent, column: Column<T, unknown>) => {

            e.preventDefault();
            e.stopPropagation();

            columnId.current = column.id;
            startX.current = e.clientX;
            startWidth.current = parseSize(column.columnDef.meta?.widthSize);

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

        },
        [onMouseMove, onMouseUp]
    );

    return { startResize };
    
}
