import { Component, OnInit } from '@angular/core';
import { Dropdown, IcountryDetail } from '../app/dropdown';
import { CountriesService } from '../app/countries.service';
import { ToasterService } from '../app/toaster/toaster.service';
import { ITableSettings, ITableData } from './table/table.interface';

import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  title = 'reusable-Compnent';

  tableSetting: ITableSettings[] = [
    {
      type: 'readonly',
      field: 'name',
      title: 'Name',
      width: '500px',
    },
    {
      type: 'readonly',
      field: 'age',
      title: 'Age',
    },
    {
      type: 'readonly',
      field: 'email',
      title: 'Email',
    },
    {
      type: 'checkbox',
      field: 'closed',
      title: 'Closed',
    },
    {
      type: 'button',
      field: 'delete',
      title: 'Delete',
      iconClass: 'fa-trash-o',
      textAlign: 'center',
    },
  ];

  tableData: ITableData = {
    count: 95,
    perPage: 15,
    isServerSide: true,
    data: [
      {
        name: 'Lisanth',
        age: 4,
        email: 'lisavinox@gmail.com',
        closed: true,
      },
      {
        name: 'Lisanth',
        age: 4,
        email: 'lisavinox@gmail.com',
        closed: false,
      },
      {
        name: 'Lisanth',
        age: 4,
        email: 'lisavinox@gmail.com',
        closed: true,
      },
    ],
  };

  constructor(private toaster: ToasterService, private _service: AppService) {}

  ngOnInit() {
    this._service.getTableData().subscribe((res) => {
      if (res && res?.length > 0) {
        this.tableData.data = res;
      }
    });
  }

  showSuccessToaster() {
    this.toaster.show(
      'success',
      'Well done!',
      'This is a success alert',
      10000
    );
  }
  showErrorToaster() {
    this.toaster.show('error', 'Sorry!', 'Please Try after sometime', 10000);
  }
  showWarningToaster() {
    this.toaster.show(
      'warning',
      'Config!',
      'Some Configuration is Missing',
      10000
    );
  }

  getCheckboxEvent(event) {
    console.log(event);
  }

  getActionEvent(event) {
    console.log(event);
  }

  getpaginationDetails(event) {
    console.log(event);
  }
}
