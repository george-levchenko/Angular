import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentRelationService {

  subject = new Subject();

  constructor() { }

  getSubject() {
    return this.subject.asObservable();
  }

  setSubject(value) {
    return this.subject.next(value);
  }
}
