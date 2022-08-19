import { Component } from '@angular/core';
import { Dropdown, IcountryDetail } from '../app/dropdown';
import { CountriesService } from '../app/countries.service';
import { ToasterService } from '../app/toaster/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountriesService]
})
export class AppComponent {
  title = 'dropdown';
  showHideTable = false;
  regionList = ['europe', 'asia'];
  column = ['name', 'capital', 'population', 'currencies', 'flag'];

  region: Dropdown = {
    label: 'Region',
    values: this.regionList
  };

  country: Dropdown = {
    label: 'Countries',
    values: []
  };
  countriesDetails: IcountryDetail[] = [];
  countriesList;
  regionSelected;
  countrySelected;

  constructor(private countryService: CountriesService, private toaster: ToasterService) {
  }

  getSelectedValue(event) {
    
    switch (event.label) {
      case 'Region':
        this.regionSelected = event.value;
        this.showHideTable = false;
        this.countryService.getCountries(this.regionSelected).subscribe((result: any) => {
          const countryList = [];
          this.countriesList = result;
          result.forEach(element => {
            countryList.push(element.name);
          });
          this.country.values = countryList;
        });
        break;
      case 'Countries':
        this.countrySelected = event.value;
        this.countriesList.forEach(element => {
          if (element.name === this.countrySelected) {
            const colList = {
              name: '',
              capital: '',
              population: null,
              currencies: '',
              flag: ''
            };
            this.column.forEach(col => {
              if (col === 'currencies') {
                colList[col] = element[col][0].code;
              } else {
                colList[col] = element[col];
              }

            });
            this.countriesDetails = [colList];
          }
        });
        this.showHideTable = true;
        break;
    }
  }

  showSuccessToaster() {
    this.toaster.show('success', 'Well done!', 'This is a success alert', 10000);
  }
}
