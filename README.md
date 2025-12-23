# Table Component

Um componente de tabela flexível e poderoso para React, construído com TanStack Table, oferecendo recursos avançados como edição, seleção, expansão, reordenação de colunas, sorting, paginação e muito mais.

## Instalação

```bash
npm install @tanstack/react-table simplebar-react
```

## Uso Básico

```tsx
import { Table } from './Table/Table';
import type { Columns } from './Table/Table.types';

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Columns<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    meta: { widthSize: '50px' },
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];

const data: User[] = [
  { id: 1, name: 'João', email: 'joao@example.com' },
  { id: 2, name: 'Maria', email: 'maria@example.com' },
];

function App() {
  return (
    <Table
      header={columns}
      data={data}
    />
  );
}
```

## Props

### Props Principais

| Prop          | Tipo           | Padrão      | Descrição                                     |
| ------------- | -------------- | ----------- | --------------------------------------------- |
| `header`      | `Columns<T>[]` | -           | Definição das colunas da tabela.              |
| `data`        | `T[]`          | -           | Dados a serem exibidos na tabela.             |
| `footer`      | `ReactNode`    | `undefined` | Conteúdo do rodapé da tabela.                 |
| `tableHeight` | `string`       | `'400px'`   | Altura da tabela (ex.: `'400px'`, `'100vh'`). |

### Funcionalidades

| Prop             | Tipo      | Padrão  | Descrição                               |
| ---------------- | --------- | ------- | --------------------------------------- |
| `resizableCol`   | `boolean` | `false` | Permite redimensionar colunas.          |
| `reorderableCol` | `boolean` | `false` | Permite reordenar colunas arrastando.   |
| `sortableCol`    | `boolean` | `true`  | Habilita sorting ao clicar nos headers. |
| `editable`       | `boolean` | `false` | Permite edição inline das células.      |
| `stripedRows`    | `boolean` | `false` | Aplica efeito zebrado nas linhas.       |

### Seleção

| Prop         | Tipo              | Padrão      | Descrição                    |
| ------------ | ----------------- | ----------- | ---------------------------- |
| `selectable` | `SelectableProps` | `undefined` | Configura seleção de linhas. |

#### SelectableProps

```tsx
interface SelectableProps {
  label?: string;           // Label para o checkbox de seleção geral
  sticky?: boolean;         // Fixa a coluna de seleção
  disableSelectRow?: (string | number)[];  // IDs de linhas não selecionáveis
  initialSelectRow?: (string | number)[];  // IDs de linhas inicialmente selecionadas
}
```

**Exemplo:**
```tsx
selectable={{
  label: 'Selecionar Tudo',
  sticky: true,
  disableSelectRow: [1, 3],
  initialSelectRow: [2]
}}
```

### Expansão

| Prop         | Tipo                 | Padrão      | Descrição                     |
| ------------ | -------------------- | ----------- | ----------------------------- |
| `expandable` | `ExpandableProps<T>` | `undefined` | Configura expansão de linhas. |

#### ExpandableProps

```tsx
interface ExpandableProps<T> {
  content?: (row: T) => ReactNode;  // Conteúdo expandido
  clickRow?: boolean;               // Expande ao clicar na linha
  sticky?: boolean;                 // Fixa a coluna de expansão
  allButton?: boolean;              // Mostra botão para expandir tudo
}
```

**Exemplo:**
```tsx
expandable={{
  content: (row) => <div>Detalhes de {row.name}</div>,
  clickRow: true,
  sticky: true,
  allButton: true
}}
```

### Paginação

| Prop         | Tipo              | Padrão      | Descrição            |
| ------------ | ----------------- | ----------- | -------------------- |
| `pagination` | `PaginationProps` | `undefined` | Configura paginação. |

#### PaginationProps

```tsx
interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  initialPageSize?: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number, pageSize: number) => void;
}
```

**Exemplo:**
```tsx
pagination={{
  currentPage: 1,
  totalItems: 100,
  pageSize: 10,
  pageSizeOptions: [10, 20, 50],
  onPageChange: (page, size) => console.log(page, size)
}}
```

### Callbacks

| Prop           | Tipo                                | Descrição                                             |
| -------------- | ----------------------------------- | ----------------------------------------------------- |
| `onSortChange` | `(sort: SortState \| null) => void` | Chamado quando o sorting muda.                        |
| `onDataChange` | `(data: T[]) => void`               | Chamado quando os dados internos mudam (ex.: edição). |

#### SortState

```tsx
interface SortState {
  columnId: string;
  direction: 'asc' | 'desc';
}
```

### Outras Props

| Prop               | Tipo                            | Padrão   | Descrição                            |
| ------------------ | ------------------------------- | -------- | ------------------------------------ |
| `defaultTextAlign` | `'left' \| 'center' \| 'right'` | `'left'` | Alinhamento padrão do texto.         |
| `draggable`        | `boolean`                       | `false`  | Permite reordenar linhas arrastando. |
| `draggableSticky`  | `boolean`                       | `false`  | Fixa a coluna de drag.               |

## Exemplos Avançados

### Tabela Editável com Seleção e Paginação

```tsx
import { useState } from 'react';
import { Table } from './Table/Table';

function EditableTable() {
  const [tableData, setTableData] = useState(data);
  const [selected, setSelected] = useState<Set<string | number>>(new Set());
  const [sort, setSort] = useState<SortState | null>(null);

  return (
    <Table
      header={columns}
      data={tableData}
      onDataChange={setTableData}
      editable
      selectable={{
        label: 'Selecionar',
        sticky: true
      }}
      sortableCol
      onSortChange={setSort}
      stripedRows
      pagination={{
        currentPage: 1,
        totalItems: 100,
        pageSize: 10,
        onPageChange: (page, size) => {
          // Buscar dados paginados
        }
      }}
    />
  );
}
```

### Headers e Footers Customizados

```tsx
const columns: Columns<User>[] = [
  {
    accessorKey: 'name',
    header: () => <strong>Nome</strong>,
    meta: {
      internalHeader: () => <em>Header Interno</em>,
      internalFooter: () => <em>Footer Interno</em>
    }
  }
];

<Table
  header={columns}
  data={data}
  footer={<div>Rodapé da Tabela</div>}
/>
```

### Colunas com Metadados

```tsx
const columns: Columns<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    meta: {
      widthSize: '50px',
      resizable: false,
      sortable: false,
      textAlign: 'center'
    }
  }
];
```

## Funcionalidades

- **Edição Inline**: Clique duplo em células editáveis para modificar.
- **Reordenação**: Arraste headers para reordenar colunas.
- **Redimensionamento**: Arraste bordas de headers para ajustar larguras.
- **Sorting**: Clique em headers para ordenar (asc/desc).
- **Seleção**: Checkboxes para selecionar linhas individuais ou todas.
- **Expansão**: Linhas expansíveis com conteúdo customizado.
- **Sticky Columns**: Colunas fixas que não rolam horizontalmente.
- **Paginação**: Navegação por páginas com controle de tamanho.
- **Linhas Zebradas**: Alterna cores de fundo para melhor legibilidade.

## Estilização

O componente usa classes CSS para estilização. Personalize sobrescrevendo as classes em `Table.scss`:

```scss
.table {
  // Personalizações
}

.striped tbody tr:nth-child(even) {
  background-color: #your-color;
}
```

## Notas

- Certifique-se de que `accessorKey` ou `id` sejam únicos para cada coluna.
- Para dados grandes, considere paginação ou virtualização.
- O componente é totalmente acessível e responsivo.