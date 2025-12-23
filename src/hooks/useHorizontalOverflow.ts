import { useLayoutEffect, useState } from 'react';

export function useHorizontalOverflow(
    ref: React.RefObject<HTMLElement | null>
) {

    const [hasOverflow, setHasOverflow] = useState(false);

    useLayoutEffect(() => {

        const el = ref.current;

        if (!el) return;

        const check = () => {
            const diff = el.scrollWidth - el.clientWidth;
            setHasOverflow(diff > 1);
        };

        check();

        const ro = new ResizeObserver(check);

        ro.observe(el);

        const content = el.firstElementChild;

        if (content instanceof HTMLElement) {
            ro.observe(content);
        }

        el.addEventListener('scroll', check, { passive: true });

        return () => {
            ro.disconnect();
            el.removeEventListener('scroll', check);
        };

    }, [ref]);

    return hasOverflow;
    
}
