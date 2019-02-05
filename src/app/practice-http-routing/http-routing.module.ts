import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingRoutingModule } from './http-routing-routing.module';
import {HttpComponent} from './http/http.component';
import {RoutingComponent} from './routing/routing.component';
import {MainHttpRoutingComponent} from './main-http-routing/main-http-routing.component';
import {HttpClientModule} from '@angular/common/http';
import {PracticeLinkComponent} from './practice-link/practice-link.component';
import {PracticeIdComponent} from './practice-id/practice-id.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../practice-services/in-memory/in-memory-data.service';

@NgModule({
  declarations: [
    HttpComponent,
    RoutingComponent,
    MainHttpRoutingComponent,
    PracticeLinkComponent,
    PracticeIdComponent,
  ],
  imports: [
    CommonModule,
    HttpRoutingRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(
      InMemoryDataService, { dataEncapsulation: false } )
  ],
  exports: [
    MainHttpRoutingComponent
  ]
})
export class HttpRoutingModule { }
