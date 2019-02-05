import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {ComponentCanDeactivate} from '../guards/can-deactivate.guard';

@Component({
  selector: 'app-practice-id',
  templateUrl: './practice-id.component.html',
  styleUrls: ['./practice-id.component.css']
})
export class PracticeIdComponent implements OnInit, ComponentCanDeactivate {

  id: number;
  product: string;
  price: string;
  routeSubscription: Subscription;
  querySubscription: Subscription;

  saved = false;
  save() {
    this.saved = true;
  }

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.routeSubscription = this.route.params.subscribe(params => this.id = params['id']);
    // this.id = this.route.snapshot.paramMap.get('id'); - for instant value

    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      });

  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return confirm('Вы хотите покинуть страницу?');
    }
    else {
      return true;
    }
  }

}
