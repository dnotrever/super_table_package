export interface User {
    id: number;
    coluna1: string;
    coluna2: string;
    coluna3: string;
    coluna4: string;
    coluna5: string;
}

export interface UsersResponse {
    data: User[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export type SortDirection = 'asc' | 'desc' | null;

export interface GetUsersParams {
    page: number;
    pageSize: number;
    sortColumn?: string | null;
    sortDirection?: SortDirection;
}

const API_BASE_URL = '/api';

export async function getUsers(params: GetUsersParams): Promise<UsersResponse> {

    const searchParams = new URLSearchParams({
        page: params.page.toString(),
        pageSize: params.pageSize.toString(),
    });
    
    if (params.sortColumn && params.sortDirection) {
        searchParams.append('sortColumn', params.sortColumn);
        searchParams.append('sortDirection', params.sortDirection);
    }
    
    const response = await fetch(`${API_BASE_URL}/users?${searchParams}`);
    
    if (!response.ok) {
        throw new Error('Erro ao buscar data');
    }
    
    return response.json();

}
