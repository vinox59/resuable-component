import { Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  Renderer2 
} from '@angular/core';
import { of, fromEvent } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  delay
} from "rxjs/operators";

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @ViewChild('selection') selection: ElementRef;
  @ViewChild('selectionItem') selectionItem: ElementRef
  @ViewChild('search') search: ElementRef;
  isShowList:boolean = false;
  selectedValue:string = ''
  multiSelectedValue: any[] = [];
  config:Idropdown = {
    isAutoComplete: false,
    isSearch: true,
    isMulti: true,
    labelBy: 'label',
    valueBy: 'value',
    data: [
      {label: 'India', value: 'IN'},
      {label: 'United State of America', value:'USA'},
      {label: 'Afghanistan', value: 'AFG'},
      {label: 'Benin', value:'BE'},
      {label: 'Brazil', value: 'BR'},
      {label: 'Cameroon', value:'CA'},
      {label: 'Comoros', value: 'CO'},
      {label: 'Denmark', value:'DE'},
      {label: 'Germany', value: 'GE'},
      {label: 'Ireland', value:'IR'},

    ]
  }

  constructor(private renderer: Renderer2) {
    // this.renderer.listen('window', 'click',(e:Event)=>{
    //  if(e.target['parentElement']['className'] !== 'dropdown-item' && e.target['className'] !== 'dropdown'){
    //      this.isShowList = false;
    //  }
    // });
   }

  ngOnInit(): void {
    console.log("search", this.search);
  }

  loadListItem(): void {
    this.toggleDropdown();
    setTimeout(() => {
      fromEvent(this.search.nativeElement, 'keyup').pipe(
        map((event: any) => {
          return event.target.value
        }),
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(value => {
        console.log(value);
      })
    }, 0)
  }

  toggleDropdown(): void {
    this.isShowList = !this.isShowList
  }

  selectedItem(item) {
    this.selectedValue = item;
    this.toggleDropdown();
  }

  selectedCheckBox(event, item) {
    if(event.target.checked) {
      item['isChecked'] = true;
      this.multiSelectedValue.push(item);
      console.log(this.multiSelectedValue);
    } else {
      item['isChecked'] = false;
      this.multiSelectedValue = this.multiSelectedValue.filter(val => !(val[this.config.labelBy] == item[this.config.labelBy]));
    }
  }

}

export interface Idropdown{
  isAutoComplete: boolean;
  isSearch: boolean;
  isMulti: boolean;
  data: any[];
  labelBy: string;
  valueBy: string;

}
