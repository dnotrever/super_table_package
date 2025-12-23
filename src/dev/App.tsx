import { useEffect, useState } from 'react';

import type { Columns, SortState } from '../Table/Table.types';
import { Table } from '../Table/Table';

import { getUsers, type User } from './api_test';

export default function App() {

    const colunas: Columns<User>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            meta: {
                widthSize: '50px',
                // widthSize: '5%',
                // sticky: 'left',
                resizable: false,
                reorderable: false,
                sortable: false,
                textAlign: 'center'
            },
        },
        {
            accessorKey: 'coluna1',
            header: 'Coluna A',
            meta: {
                widthSize: '300px',
                // widthSize: '15%',
                // sticky: 'left',
                // internalHeader: 'Header Interno A',
                // internalFooter: 'Footer Interno A',
            },
        },
        {
            accessorKey: 'coluna2',
            header: 'Coluna B',
            meta: {
                widthSize: '300px',
                // widthSize: '15%',
            },
            cell: ({ row }) => {
                const colB = row.original.coluna2;
                const clique = () => { alert(`Você clicou para exibir: ${colB}`) }
                return (
                    <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={clique}>
                        {colB} Cust.
                    </a>
                );
            },
        },
        {
            accessorKey: 'coluna3',
            header: 'Coluna C',
            meta: {
                widthSize: '300px',
                // widthSize: '15%',
                // internalHeader: () => {
                //     return (
                //         <div style={{ color: 'red', fontWeight: 'bold' }}>
                //             Header Interno Cust.
                //         </div>
                //     );
                // },
                // internalFooter: () => {
                //     return (
                //         <div style={{ color: 'green', fontWeight: 'bold' }}>
                //             Footer Interno Cust.
                //         </div>
                //     );
                // },
            },
        },
        {
            accessorKey: 'coluna4',
            // header: 'Coluna D',
            header: () => (
                <div style={{ color: 'goldenrod', fontWeight: 'bold' }}>
                    Coluna D Cust.
                </div>
            ),
            meta: {
                widthSize: '300px',
                // widthSize: '15%',
            },
        },
        {
            accessorKey: 'coluna5',
            header: 'Coluna E',
            meta: {
                widthSize: '300px',
                // widthSize: '15%',
            },
        },
        {
            accessorKey: 'coluna6',
            // header: 'Coluna F',
            header: () => (
                <input type="text" style={{ height: '12px', padding: '8px 8px', borderRadius: '4px', border: '1px solid #aaa' }} />
            ),
            meta: {
                widthSize: '300px',
                // widthSize: '20%',
                // sticky: 'right',
                sortable: false,
                resizable: false,
                reorderable: false,
                // textAlign: 'center',
                // internalHeader: () => {
                //     return (
                //         <input type="text" style={{ height: '12px', padding: '8px 8px', borderRadius: '4px', border: '1px solid #aaa' }} />
                //     );
                // },
            },
        },
    ];

    const rodape = (
        <div style={{ padding: '10px 0' }}>
            Footer Externo
        </div>
    );

    // const conteudoExpandido = (row: User) => (
    //     <div style={{ padding: '5px 10px' }}>
    //         <div>Detalhes de {row.coluna1}</div>
    //     </div>
    // );

    // Pagination e Sortable ====================================================================================

    const [users, setUsers] = useState<User[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState(0);

    const [sort, setSort] = useState<SortState | null>(null);

    useEffect(() => {
        getUsers({
            page: currentPage,
            pageSize: pageSize,
            sortColumn: sort?.columnId,
            sortDirection: sort?.direction
        })
            .then(res => {
                setTotalItems(res.total);
                setUsers(res.data);
            });
    }, [currentPage, pageSize, sort]);

    const handlePageChange = (page: number, newPageSize: number) => {
        setCurrentPage(page);
        setPageSize(newPageSize);
    };

    //=================================================================================================

    const [tableData, setTableData] = useState<User[]>(users);

    const handleSubmit = () => {
        console.log('Dados capturados:', tableData);
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ width: '90%' }}>

                <Table

                    header={colunas}
                    data={users}
                    footer={rodape}

                    onDataChange={setTableData}

                    tableHeight='calc(100vh - 320px)'
                    // defaultTextAlign='center'

                    resizableCol
                    reorderableCol

                    sortableCol
                    // sortableCol={false}
                    onSortChange={setSort}

                    editable

                    draggable
                    // draggableSticky

                    // selectable={{
                    //     sticky: true,
                    //     // label: 'Selecionar',
                    //     disableSelectRow: [2, 4, 6, 8],
                    //     initialSelectRow: [1, 3, 5]
                    // }}

                    // expandable={{
                    //     sticky: true,
                    //     clickRow: true,
                    //     allButton: true,
                    //     content: (row: User) => (
                    //         <div style={{ padding: '5px 10px' }}>
                    //             <div>Detalhes de {row.coluna1}</div>
                    //         </div>
                    //     ),
                    // }}

                    pagination={{
                        currentPage,
                        pageSize,
                        totalItems,
                        pageSizeOptions: [15, 30, 60, 120],
                        onPageChange: handlePageChange,
                    }}

                    hoverableRow
                    stripedRows
                    // borders='simple'
                    borders='none'

                />

                <button
                    style={{ margin: '20px 0', padding: '4px 16px', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>

            </div>
        </div>
    );
}
