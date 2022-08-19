import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { Toaster } from '../toaster.interface';

@Component({
  selector: 'app-toaster-container',
  templateUrl: './toaster-container.component.html',
  styleUrls: ['./toaster-container.component.scss']
})
export class ToasterContainerComponent implements OnInit {
  toasts: Toaster[] = [];

  constructor(private toaster: ToasterService) { }

  ngOnInit(): void {
    this.toaster.toast$
      .subscribe(toast => {
        this.toasts = [toast, ...this.toasts];
        setTimeout(() => this.toasts.pop(), toast.delay || 6000);
      });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((v, i) => i !== index);
    //this.toasts.splice(index, 1);
  }

}
