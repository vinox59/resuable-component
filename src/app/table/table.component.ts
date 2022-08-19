import { Component, Input, OnInit } from '@angular/core';
import { ITableSettings } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() settings: ITableSettings[];
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
