export interface ITableSettings {
  type: fieldType;
  field: string;
  title: string;
  iconClass?: string;
  textAlign?: textAlign;
  width?: string;
}

export interface ITableData {
  data: any[];
  count: number;
  perPage: number;
  isServerSide: boolean;
}

export type fieldType = 'readonly' | 'checkbox' | 'button';

export type textAlign = 'center' | 'left' | 'right';
