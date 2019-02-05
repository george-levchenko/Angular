import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Worker} from '../../practice-http-routing/http/http.component';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const workers: Worker[] = [
      { id: 1, name: 'Brad' },
      { id: 2, name: 'Pit' },
      { id: 3, name: 'Alex' },
      { id: 4, name: 'Monako' },
      { id: 5, name: 'George' },
      { id: 6, name: 'Vendetta' },
      { id: 7, name: 'Drama' },
      { id: 8, name: 'Doctor' },
      { id: 9, name: 'Nurse' },
      { id: 10, name: 'Tornado' }
    ];
    return {workers};
  }

  // Overrides the genId method to ensure that a worker always has an id.
  // If the workers array is empty,
  // the method below returns the initial number (1).
  // if the workers array is not empty, the method below returns the highest
  // worker id + 1.
  // genId(workers: Worker[]): number {
  //   return workers.length > 0 ? Math.max(...workers.map(worker => worker.id)) + 1 : 1;
  // }
}
