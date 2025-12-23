import { useCallback, useRef, useState } from 'react';

interface Args<T> {
    setData: React.Dispatch<React.SetStateAction<T[]>>;
    enabled?: boolean;
}

export function useRowReorder<T>({ setData, enabled = true }: Args<T>) {

    const draggingIndexRef = useRef<number | null>(null);
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

    const onDragStart = useCallback(
        (e: React.DragEvent<HTMLTableRowElement>, index: number) => {

            if (!enabled) return;

            draggingIndexRef.current = index;
            
            setDraggingIndex(index);

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', String(index));

        },
        [enabled]
    );

    const onDragOver = useCallback(
        (e: React.DragEvent<HTMLTableRowElement>, overIndex: number) => {

            if (!enabled) return;

            e.preventDefault();

            const fromIndex = draggingIndexRef.current;

            if (fromIndex === null || fromIndex === overIndex) return;

            setData(prev => {
                const next = [...prev];
                const [item] = next.splice(fromIndex, 1);
                next.splice(overIndex, 0, item);
                return next;
            });

            draggingIndexRef.current = overIndex;
            setDraggingIndex(overIndex);

        },
        [enabled, setData]
    );

    const reset = useCallback(() => {
        draggingIndexRef.current = null;
        setDraggingIndex(null);
    }, []);

    return {
        draggingIndex,
        onDragStart,
        onDragOver,
        onDrop: reset,
        onDragEnd: reset,
    };
    
}
