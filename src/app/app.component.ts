import { Component } from '@angular/core';
import { Dropdown, IcountryDetail } from '../app/dropdown';
import { CountriesService } from '../app/countries.service';
import { ToasterService } from '../app/toaster/toaster.service';
import { ITableSettings, ITableData } from './table/table.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountriesService],
})
export class AppComponent {
  title = 'reusable-Compnent';

  tableSetting: ITableSettings[] = [
    {
      type: 'readonly',
      field: 'name',
      title: 'Name',
    },
    {
      field: 'age',
      title: 'Age',
    },
    {
      field: 'email',
      title: 'Email',
    },
  ];

  tableData: ITableData = {
    count: 75,
    perPage: 15,
    data: [
      {
        name: 'Lisanth',
        age: 4,
        email: 'lisavinox@gmail.com',
      },
      {
        name: 'Lisanth',
        age: 4,
        email: 'lisavinox@gmail.com',
      },
      {
        name: 'Lisanth',
        age: 4,
        email: 'lisavinox@gmail.com',
      },
    ],
  };

  constructor(private toaster: ToasterService) {}

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
}
