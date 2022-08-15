import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  setToLocalStorage(key: string, data: unknown) {
    console.log(
      '🚀 ~ file: localstorage.service.ts ~ line 6 ~ LocalstorageService ~ setToLocalStorage ~ data',
      data
    );
    console.log(
      '🚀 ~ file: localstorage.service.ts ~ line 6 ~ LocalstorageService ~ setToLocalStorage ~ key',
      key
    );
    console.log('here');

    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error('Error saving to localStorage', err);
    }
  }

  getFromLocalStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error('Error getting data from localStorage', err);
      return null;
    }
  }
}
