import type { ReactNode } from 'react';
import type { Table } from '@tanstack/react-table';

interface Props<T> {
    table: Table<T>;
    children?: ReactNode;
}

export function ExternalFooter<T>({ children }: Props<T>) {
    return (
        <table className="table table-external-footer">
            <tfoot>
                <tr>
                    <td>{children}</td>
                </tr>
            </tfoot>
        </table>
    );
}
