import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Dropdown} from '../dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() select: Dropdown;
  @Output() ChangeEvent = new EventEmitter();
  label = '';
  selectedValue = '';

  constructor() {
  }

  ngOnInit(): void {
    this.label = this.select.label;
  }

  setValue(event) {
    this.ChangeEvent.emit({label: this.select.label, value: event});
  }

}

