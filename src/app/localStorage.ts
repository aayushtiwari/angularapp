import {Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalService {
 itemValue = new Subject<string>();

  watchStorage() {
    return this.itemValue.asObservable();
    // return localStorage.inputVal;
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.itemValue.next(data);
  }
}
