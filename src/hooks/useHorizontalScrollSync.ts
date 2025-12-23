import { useCallback, useRef } from 'react';

export function useHorizontalScrollSync() {
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const syncRefs = useRef<HTMLElement[]>([]);

    const registerSyncElement = useCallback((el: HTMLElement | null) => {
        if (el && !syncRefs.current.includes(el)) {
            syncRefs.current.push(el);
        }
    }, []);

    const onBodyScroll = useCallback(() => {
        
        if (!bodyRef.current) return;

        const scrollLeft = bodyRef.current.scrollLeft;

        syncRefs.current.forEach(el => {
            if (el.scrollLeft !== scrollLeft) {
                el.scrollLeft = scrollLeft;
            }
        });

    }, []);

    return {
        bodyRef,
        registerSyncElement,
        onBodyScroll,
    };
}
