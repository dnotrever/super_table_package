import { useLayoutEffect, useState, type RefObject } from 'react';

export function useTableWidth(
	ref: RefObject<HTMLElement | null>
) {

	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {

		const el = ref.current;

		if (!el) return;

		const observer = new ResizeObserver(entries => {
			setWidth(entries[0].contentRect.width);
		});

		observer.observe(el);

		return () => observer.disconnect();

	}, [ref]);

	return width;

}
