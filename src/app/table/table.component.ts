import { Component, Input, OnInit } from '@angular/core';
import { ITableSettings, ITableData } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() settings: ITableSettings[];
  @Input() tableData: ITableData;

  constructor() {}

  ngOnInit(): void {}
}
