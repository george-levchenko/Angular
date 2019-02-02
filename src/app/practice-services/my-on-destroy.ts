import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class MyOnDestroy implements OnDestroy {

  onDestroy$ = new Subject();

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
