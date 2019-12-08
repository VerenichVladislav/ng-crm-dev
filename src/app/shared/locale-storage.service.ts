import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleStorageService {

  constructor() { }

  update(fieldName: string, value: any) {
    localStorage.removeItem(fieldName);
    localStorage.setItem(fieldName, JSON.stringify(value));
  }
}
