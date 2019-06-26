import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { MainObservablesComponent } from './main-observables/main-observables.component';

@NgModule({
  declarations: [MainObservablesComponent],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ],
  exports: [
    MainObservablesComponent
  ]
})
export class ObservablesModule { }
