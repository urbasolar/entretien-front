import { ColumnDef } from '@tanstack/react-table';

export type TTable = {
    data: unknown[];
    columns: ColumnDef<unknown, any>[]
    loading: boolean;
    itemsSelected?: (items: unknown) => void;
}