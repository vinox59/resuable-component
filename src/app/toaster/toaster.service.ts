import { Injectable } from '@angular/core';
import { Toaster } from './toaster.interface';
import { ToastType } from './toaster.type';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  subject: BehaviorSubject<Toaster>;
  toast$: Observable<Toaster>;

  constructor() {
    this.subject = new BehaviorSubject<Toaster>(null);
    this.toast$ = this.subject.asObservable()
      .pipe(filter(toast => toast !== null));
  }

  show(type: ToastType, title?: string, body?: string, delay?: number) {
    this.subject.next({ type, title, body, delay });
  }
}