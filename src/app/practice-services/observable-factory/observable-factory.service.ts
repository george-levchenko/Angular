import { Injectable } from '@angular/core';
import {from, interval, of, Subject, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableFactoryService {

  constructor() { }

  subject = new Subject();

  getSubject() {
    return this.subject.asObservable();
  }

  setSubject(value) {
    return this.subject.next(value);
  }

  getInterval() {
    return interval(500);
  }

  getTimer1() {
    return timer(5000);
  }

  getTimer2() {
    return timer(0, 5000);
  }

  getOf() {
    return of(1, 2, 3, 4, 5);
    // return of({ name: 'Brian' }, [1, 2, 3], function hello() { return 'Hello'; } );
  }

  getOf2() {
    return of(6, 7, 8, 9, 10);
  }

  getFrom() {
    return from([{ name: 'George', age: 26 }, { name: 'Olga', age: 32 }]);
  }
}
