import { Component, OnInit, Input} from '@angular/core';
import {IcountryDetail} from '../dropdown';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  @Input() columns: string[];
  @Input() item: IcountryDetail[];
  column: string[];

  constructor() { }

  ngOnInit(): void {
    this.column = (this.columns) ? this.columns : [];
  }

}
