import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../practice-services/message-service/message.service';
import {
  debounceTime, delay,
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  mergeMap,
  pluck,
  skipUntil,
  switchMap,
  take,
  takeUntil, tap, withLatestFrom
} from 'rxjs/operators';
import {combineLatest, concat, fromEvent, interval, merge, observable, of, pipe, timer} from 'rxjs';
import {MyOnDestroy} from '../../practice-services/my-on-destroy';
import {ObservableFactoryService} from '../../practice-services/observable-factory/observable-factory.service';

@Component({
  selector: 'app-main-observables',
  templateUrl: './main-observables.component.html',
  styleUrls: ['./main-observables.component.css']
})
export class MainObservablesComponent extends  MyOnDestroy implements OnInit {

  constructor(private observableService: ObservableFactoryService,
              public messageService: MessageService) {
    super();
  }

  ngOnInit(): void {
    this.observableService.getSubject().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      (value) => this.messageService.add(`Observables #3 value: ${value}`),
      (err) => this.messageService.add(`Observables #3 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #3 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onFirstButtonClick() {

    this.observableService.getInterval().pipe(
      takeUntil(this.onDestroy$),
      takeUntil(this.observableService.getTimer1())
    ).subscribe(
      (value) => this.messageService.add(`Observables #1 value: ${value}`),
      (err) => this.messageService.add(`Observables #1 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #1 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );

  }

  onSecondButtonClick() {

    this.observableService.getOf().pipe(
      switchMap(() => this.observableService.getOf().pipe(
        take(3)
      )),
    ).subscribe(
      (value) => this.messageService.add(`Observables #2 value: ${value}`),
      (err) => this.messageService.add(`Observables #2 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #2 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onThirdButtonClick() {

    this.observableService.getOf().pipe(
      mergeMap(() => this.observableService.getInterval().pipe(
        take(3)
      )),
    ).subscribe(
      (value) => this.messageService.add(`Observables #3 value: ${value}`),
      (err) => this.messageService.add(`Observables #3 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #3 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onFourthButtonClick() {

    const observable1 = this.observableService.getOf();
    const observable2 = this.observableService.getOf2();

    merge(observable1, observable2)
      .subscribe(
        (value) => this.messageService.add(`Observables #4 value: ${value}`),
        (err) => this.messageService.add(`Observables #4 catch error: ${err}`),
        () => {
          this.messageService.add(`Observables #4 : Test finished Successfully`);
          this.messageService.add(`-------------------------------------------`);
        }
      );
  }

  onFifthButtonClick() {

    const observable1 = this.observableService.getOf();
    const observable2 = this.observableService.getOf2();

    merge(observable1, observable2)
      .subscribe(
        (value) => this.messageService.add(`Observables #5 value: ${value}`),
        (err) => this.messageService.add(`Observables #5 catch error: ${err}`),
        () => {
          this.messageService.add(`Observables #5 : Test finished Successfully`);
          this.messageService.add(`-------------------------------------------`);
        }
      );
  }

  onSixthButtonClick() {

    this.observableService.getOf().pipe(
      map(value => value * 10)
    ).subscribe(
      (value) => this.messageService.add(`Observables #6 value: ${value}`),
      (err) => this.messageService.add(`Observables #6 catch error: ${err}`),
      () => { this.messageService.add(`Observables #6 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`); }
    );
  }

  onSeventhButtonClick() {

    this.observableService.getOf().pipe(
      filter(value => value % 2 !== 0)
    ).subscribe(
        (value) => this.messageService.add(`Observables #7 value: ${value}`),
        (err) => this.messageService.add(`Observables #7 catch error: ${err}`),
        () => { this.messageService.add(`Observables #7 : Test finished Successfully`);
          this.messageService.add(`-------------------------------------------`); }
      );
  }

  onEightsButtonClick() {

    this.observableService.getFrom().pipe(
      pluck('name')
    ).subscribe(
        (value) => this.messageService.add(`Observables #8 value: ${value}`),
        (err) => this.messageService.add(`Observables #8 catch error: ${err}`),
        () => { this.messageService.add(`Observables #8 : Test finished Successfully`);
          this.messageService.add(`-------------------------------------------`); }
      );
    }

  onNinthButtonClick() {

    this.observableService.getInterval().pipe(
      skipUntil(timer(2000)),
      takeUntil(timer(5000))
    ).subscribe(
        (value) => this.messageService.add(`Observables #9 value: ${value}`),
        (err) => this.messageService.add(`Observables #9 catch error: ${err}`),
        () => { this.messageService.add(`Observables #9 : Test finished Successfully`);
          this.messageService.add(`-------------------------------------------`); }
      );
  }

  onTenthButtonClick() {

    this.observableService.getOf().pipe(
      mapTo('Oh Shit!')
    ).subscribe(
        (value) => this.messageService.add(`Observables #10 value: ${value}`),
        (err) => this.messageService.add(`Observables #10 catch error: ${err}`),
        () => {
          this.messageService.add(`Observables #10 : Test finished Successfully`);
          this.messageService.add(`-------------------------------------------`);
        }
      );

  }

  onEleventhButtonClick() {

    of(1, 1, 2, 2, 3, 3, 4, 4, 5, 5).pipe(
      distinctUntilChanged()
    ).subscribe(
      (value) => this.messageService.add(`Observables #11 value: ${value}`),
      (err) => this.messageService.add(`Observables #11 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #11 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onTwelvethButtonClick() {

      this.observableService.getOf().pipe(
      debounceTime(500)
    ).subscribe(
      (value) => this.messageService.add(`Observables #12 value: ${value}`),
      (err) => this.messageService.add(`Observables #12 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #12 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onThirteenthButtonClick() {

    const observable1 = interval(500);
    const observable2 = interval(1000);

      combineLatest(observable1, observable2).pipe(
        takeUntil(timer(10000))
    ).subscribe(
      (value) => this.messageService.add(`Observables #13 value: ${value}`),
      (err) => this.messageService.add(`Observables #13 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #13 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onFourteenthButtonClick() {

    const observable1 = interval(500);
    const observable2 = interval(1000);

    observable1.pipe(
      withLatestFrom(observable2),
      takeUntil(timer(10000))
    ).subscribe(
      (value) => this.messageService.add(`Observables #14 value: ${value}`),
      (err) => this.messageService.add(`Observables #14 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #14 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

  onFifteenthButtonClick() {

    this.observableService.getOf().pipe(
      tap( val => this.messageService.add(`Observables #10 Received value!`))
    ).subscribe(
      (value) => this.messageService.add(`Observables #10 value: ${value}`),
      (err) => this.messageService.add(`Observables #10 catch error: ${err}`),
      () => {
        this.messageService.add(`Observables #10 : Test finished Successfully`);
        this.messageService.add(`-------------------------------------------`);
      }
    );
  }

}
