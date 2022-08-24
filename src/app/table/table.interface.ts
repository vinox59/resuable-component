export interface ITableSettings {
  type: fieldType;
  field: string;
  title: string;
}

export interface ITableData {
  data: any[];
  count: number;
  perPage: number;
}

export type fieldType = 'readonly' | 'checkbox';
