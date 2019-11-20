import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService<T> {
  private data: T;

  data$ = new BehaviorSubject<T>(this.data);
  constructor() { }

  setData(data: T) {
    this.data$.next(data)
  }
}
