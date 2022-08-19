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
  sliceCountStart: number = 0;
  sliceCountEnd: number = 4;
  pageinationCount: number;
  pageinationCountList: number[] = [];
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.getPagination();
  }

  getPagination() {
    this.getPaginationNumber();
  }

  getPaginationNumber() {
    this.pageinationCount = this.getPaginationCount();
    for (let i = 1; i <= this.pageinationCount; i++) {
      this.pageinationCountList.push(i);
    }
  }

  getPaginationCount() {
    return Math.ceil(this.tableData.count / this.tableData.perPage);
  }

  getCurrentPage(pageNo, action?: string) {
    this.currentPage = pageNo;
    if (pageNo > this.sliceCountEnd && action == 'stepUp') {
      this.sliceCountStart++;
      this.sliceCountEnd++;
    }

    if (pageNo < this.sliceCountEnd && action == 'stepDown') {
      this.sliceCountStart--;
      this.sliceCountEnd--;
    }
  }
}
