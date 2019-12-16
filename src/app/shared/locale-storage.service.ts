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

  addTo(fieldName: string, listName: string, value: any) {
    let user = JSON.parse(localStorage.getItem(fieldName));
    user[listName].push(value);
    localStorage.removeItem(fieldName);
    localStorage.setItem(fieldName, JSON.stringify(user));
  }
}
