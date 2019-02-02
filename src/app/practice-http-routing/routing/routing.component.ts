import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {

  id = 13;
  product = 'chocolate';
  price = 20;

  constructor(private router: Router) { }

  goPracticeLink() {
    this.router.navigate(['/http-routing/practice-link']);
  }

  goPracticeId() {
    this.router.navigate(['/http-routing/practice-id', this.id]);
  }

  goPracticeQuery() {
    this.router.navigate(['/http-routing/practice-id', this.id],
      {
        queryParams: {
          'product': this.product,
          'price': this.price
        }
      });
  }

}
