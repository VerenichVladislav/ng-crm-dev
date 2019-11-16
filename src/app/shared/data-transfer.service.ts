import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data: T;
  //This is the key the Subject to transfer
  data$ = new BehaviorSubject<T>(this.data);
  constructor() { }

  setData(data: T) {
    this.data$.next(data)
  }
}
