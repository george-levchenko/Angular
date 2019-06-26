import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Worker } from '@app/practice-http-routing/http/http.component';

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
}
