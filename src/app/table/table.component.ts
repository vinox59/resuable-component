import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITableSettings, ITableData } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() settings: ITableSettings[];
  @Input() tableData: ITableData;
  @Output() checkboxEvent = new EventEmitter();
  @Output() actionEvent = new EventEmitter();
  @Output() paginationDetails = new EventEmitter();
  initalPagination: number = 4;
  sliceCountStart: number = 0;
  sliceCountEnd: number = this.initalPagination;
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

    switch (action) {
      case 'stepUp':
        if (pageNo > this.sliceCountEnd) {
          this.sliceCountStart++;
          this.sliceCountEnd++;
        }
        break;
      case 'stepDown':
        if (pageNo <= this.initalPagination) {
          this.sliceCountStart = 0;
          this.sliceCountEnd = this.initalPagination;
        }
        break;
    }
    const obj = {
      currentPage: pageNo,
    };
    this.paginationDetails.emit(obj);
  }

  checkboxEmit(event: any, data: any, field: string) {
    const obj = { isSelected: event.target.checked, data, field };
    this.checkboxEvent.emit(obj);
  }

  clickAction(data: any, field: string) {
    const obj = { data, field };
    this.actionEvent.emit(obj);
  }
}
