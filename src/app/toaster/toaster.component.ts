import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toaster } from './toaster.interface';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  @Input() toast: Toaster;
  @Input() i: number;

  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
