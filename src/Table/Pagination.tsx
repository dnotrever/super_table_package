import { useMemo } from 'react';

type PageItem = number | 'ellipsis';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    pageSize: number;
    pageSizeOptions?: number[];
    onPageChange: (page: number, pageSize: number) => void;
}

function getPages(current: number, total: number, delta = 2): PageItem[] {

    if (total <= 1) return [1];

    const pages: PageItem[] = [];
    const range: number[] = [];

    const start = Math.max(2, current - delta);
    const end = Math.min(total - 1, current + delta);

    for (let i = start; i <= end; i++) {
        range.push(i);
    }

    pages.push(1);

    if (start > 2) {
        pages.push('ellipsis');
    }

    pages.push(...range);

    if (end < total - 1) {
        pages.push('ellipsis');
    }

    pages.push(total);

    return pages;

}

export function Pagination({
    currentPage,
    totalItems,
    pageSize,
    pageSizeOptions = [10, 25, 50, 100, 200],
    onPageChange,
}: PaginationProps) {

    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

    const endItem = Math.min(currentPage * pageSize, totalItems);

    const pages = useMemo(
        () => getPages(currentPage, totalPages),
        [currentPage, totalPages]
    );

    const normalizedPageSizeOptions = useMemo(() => {
        const set = new Set(pageSizeOptions);
        set.add(pageSize);
        return Array.from(set).sort((a, b) => a - b);
    }, [pageSizeOptions, pageSize]);

    return (
        <div className="table-pagination">

            <div className="pagination-controls">

                <button
                    className="pagination-btn pagination-arrow"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(1, pageSize)}
                    title="Primeira página"
                >
                    ««
                </button>

                <button
                    className="pagination-btn pagination-arrow"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1, pageSize)}
                    title="Página anterior"
                >
                    «
                </button>

                {
                    pages.map((item, index) =>
                        item === 'ellipsis' ? (
                            <span
                                key={`e-${index}`}
                                className="pagination-btn ellipsis"
                            >
                                ...
                            </span>
                        ) : (
                            <button
                                key={item}
                                className={`pagination-btn ${item === currentPage ? 'active' : ''
                                    }`}
                                onClick={() => onPageChange(item, pageSize)}
                            >
                                {item}
                            </button>
                        )
                    )
                }

                <button
                    className="pagination-btn pagination-arrow"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1, pageSize)}
                    title="Próxima página"
                >
                    »
                </button>

                <button
                    className="pagination-btn pagination-arrow"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(totalPages, pageSize)}
                    title="Última página"
                >
                    »»
                </button>

            </div>

            <div className="pagination-info">

                <span>
                    Exibindo de {startItem} a {endItem} de {totalItems} registros
                </span>

                <span className="pagination-separator">•</span>

                <div className="pagination-select">

                    <label>Itens por página:</label>

                    <select
                        value={pageSize}
                        onChange={e =>
                            onPageChange(1, Number(e.target.value))
                        }
                    >
                        {
                            normalizedPageSizeOptions.map(size => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))
                        }
                    </select>

                </div>

            </div>

        </div>
    );
}
