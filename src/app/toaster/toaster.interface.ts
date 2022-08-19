import { ToastType } from './toaster.type';

export interface Toaster {
  type: ToastType;
  title: string;
  body: string;
  delay: number;
}