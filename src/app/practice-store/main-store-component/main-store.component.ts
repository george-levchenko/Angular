import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/practice-services/message-service/message.service';
import { MyOnDestroy } from '@app/practice-services/my-on-destroy';
import { ObservableFactoryService } from '@app/practice-services/observable-factory/observable-factory.service';
import { changeHeroById, clearHeroes, decrement, getHeroes, increment, reset, setHero } from '@app/practice-store/store/store.actions';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { HeroList } from '@app/practice-store/store/store.reducer';


@Component({
  selector: 'app-main-store',
  templateUrl: './main-store.component.html',
  styleUrls: ['./main-store.component.css']
})
export class MainStoreComponent extends MyOnDestroy implements OnInit {

  count$: Observable<number>;
  newHero19: HeroList = {id: 19, name: 'Tyrant', type: 'warrior'};
  newHero20: HeroList = {id: 20, name: 'Overlord', type: 'mag'};

  constructor(public messageService: MessageService,
              private observableService: ObservableFactoryService,
              private storeCount: Store<{count: number}>,
              private storeHero: Store<{heroes: HeroList[]}>) {
    super();
    this.count$ = storeCount.pipe(select('count'));
  }

  ngOnInit() {}

  increment() {
    this.storeCount.dispatch(increment());
  }

  decrement() {
    this.storeCount.dispatch(decrement());
  }

  reset() {
    this.storeCount.dispatch(reset());
  }

  getHeroes() {
    this.storeHero.dispatch(getHeroes());
  }

  setHero() {
    this.storeHero.dispatch(setHero(this.newHero19));
  }

  changeHeroById() {
    this.storeHero.dispatch(setHero(this.newHero20));
  }

  clearHeroes() {
    this.storeHero.dispatch(clearHeroes());
  }


  // onFirstButtonClick() {
  //
  //   this.observableService.getInterval().pipe(
  //     takeUntil(this.onDestroy$),
  //     takeUntil(this.observableService.getTimer1())
  //   ).subscribe(
  //     (value) => this.messageService.add(`Observables #1 value: ${value}`),
  //     (err) => this.messageService.add(`Observables #1 catch error: ${err}`),
  //     () => {
  //       this.messageService.add(`Observables #1 : Test finished Successfully`);
  //       this.messageService.add(`-------------------------------------------`);
  //     }
  //   );
  // }
}
