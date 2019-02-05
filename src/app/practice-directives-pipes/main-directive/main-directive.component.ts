import { Component, OnInit } from '@angular/core';
import {interval, Observable, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ExponentialPipe} from '../pipe-exponential/exponential.pipe';

@Component({
  selector: 'app-main-directive',
  templateUrl: './main-directive.component.html',
  styleUrls: ['./main-directive.component.css']
})
export class MainDirectiveComponent implements OnInit {

  color = 'blue';
  condition = false;
  today = new Date();

  yummyList = ['cake', 'ice-cream', 'chocolate', 'crepes', 'cookies'];
  yummy: Observable<string>;

  pipeNumber = 1;
  pipePower = 1;

  constructor( private expPipe: ExponentialPipe ) { }

  pipeValue = this.expPipe.transform(2, '10');

ngOnInit(): void {

  this.yummy = timer(0, 6000).pipe(
    switchMap(() => interval(1000)),
    map((i: number) => this.yummyList[i]),
);
  // this.yummy =  timer(0, 3000).pipe(() => switchMap(
  //    interval(500).pipe(
  //     map((i: number ) => this.yummyList[i]))
  // ));
  // this.yummy = interval(500).pipe(map((i: number ) => this.yummyList[i]));
}

  changeCondition() {
    this.condition = !this.condition;
  }

  putNumber(event) {
    this.pipeNumber = event.target.value;
  }

  putPower(event) {
    this.pipePower = event.target.value;
  }
}
