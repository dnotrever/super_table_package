import { useRef, useCallback } from 'react';

interface Args {
    setColumnOrder: React.Dispatch<React.SetStateAction<string[]>>;
}

type HeaderInfo = {
    id: string;
    left: number;
    right: number;
    center: number;
};

export function useColumnReorderGhost({ setColumnOrder }: Args) {

    const draggingId = useRef<string | null>(null);
    const ghostEl = useRef<HTMLElement | null>(null);
    const originTh = useRef<HTMLElement | null>(null);

    const pointerOffsetX = useRef<number>(0);
    const rafId = useRef<number | null>(null);
    const lastPointerX = useRef<number>(0);

    const headersCache = useRef<HeaderInfo[]>([]);

    const onPointerMove = useRef<(e: PointerEvent) => void>(() => { });
    const onPointerUp = useRef<() => void>(() => { });

    const readHeaders = useCallback(() => {
        const ths = Array.from(
            document.querySelectorAll<HTMLElement>('th[data-col-id]')
        );

        headersCache.current = ths
            .filter(th => th.dataset.reorderable !== 'false')
            .map(th => {
                const id = th.dataset.colId!;
                const r = th.getBoundingClientRect();

                return {
                    id,
                    left: r.left,
                    right: r.right,
                    center: r.left + r.width / 2,
                };
            })
            .sort((a, b) => a.left - b.left);
    }, []);

    const createGhost = useCallback((th: HTMLElement) => {

        const rect = th.getBoundingClientRect();

        const ghost = th.cloneNode(true) as HTMLElement;

        ghost.classList.add('table-col-ghost');

        ghost.style.position = 'fixed';
        ghost.style.left = `${rect.left}px`;
        ghost.style.top = `${rect.top}px`;
        ghost.style.width = `${rect.width}px`;
        ghost.style.height = `${rect.height}px`;
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '9999';
        ghost.style.willChange = 'left';
        ghost.style.transition = 'none';

        document.body.appendChild(ghost);

        return ghost;

    }, []);

    const startDrag = useCallback(
        (columnId: string, e: PointerEvent) => {

            draggingId.current = columnId;

            const th = document.querySelector<HTMLElement>(`th[data-col-id="${columnId}"]`);

            if (!th) return;

            originTh.current = th;

            const rect = th.getBoundingClientRect();
            pointerOffsetX.current = e.clientX - rect.left;

            const ghost = createGhost(th);
            ghostEl.current = ghost;

            th.classList.add('is-dragging-col');
            th.style.opacity = '0.2';

            readHeaders();

            lastPointerX.current = e.clientX;
            document.body.style.cursor = 'grabbing';

            document.addEventListener('pointermove', onPointerMove.current);
            document.addEventListener('pointerup', onPointerUp.current);

        },
        [createGhost, readHeaders]
    );

    onPointerMove.current = (e: PointerEvent) => {

        if (!draggingId.current || !ghostEl.current) return;

        lastPointerX.current = e.clientX;

        if (rafId.current) return;

        rafId.current = requestAnimationFrame(() => {

            rafId.current = null;

            if (!draggingId.current || !ghostEl.current) return;

            const ghost = ghostEl.current;

            const desiredLeft = lastPointerX.current - pointerOffsetX.current;
            ghost.style.left = `${desiredLeft}px`;

            const ghostWidth = ghost.offsetWidth;
            const ghostCenter = desiredLeft + ghostWidth / 2;

            const headers = headersCache.current;

            if (!headers.length) return;

            let overId: string | null = null;

            for (const h of headers) {
                if (h.id === draggingId.current) continue;
                if (ghostCenter >= h.left && ghostCenter <= h.right) {
                    overId = h.id;
                    break;
                }
            }

            if (!overId || overId === draggingId.current) return;

            setColumnOrder(prev => {
                const from = prev.indexOf(draggingId.current!);
                const to = prev.indexOf(overId!);
                if (from === -1 || to === -1 || from === to) return prev;

                const next = [...prev];
                next.splice(from, 1);
                next.splice(to, 0, draggingId.current!);
                return next;
            });

            requestAnimationFrame(() => {
                readHeaders();
            });

        });

    };

    onPointerUp.current = () => {

        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
        }

        ghostEl.current?.remove();
        ghostEl.current = null;

        if (originTh.current) {
            originTh.current.classList.remove('is-dragging-col');
            originTh.current.style.opacity = '';
        }

        originTh.current = null;

        draggingId.current = null;
        pointerOffsetX.current = 0;
        lastPointerX.current = 0;
        headersCache.current = [];

        document.body.style.cursor = '';

        document.removeEventListener('pointermove', onPointerMove.current);
        document.removeEventListener('pointerup', onPointerUp.current);
        
    };

    return {
        startDrag,
    };

}
