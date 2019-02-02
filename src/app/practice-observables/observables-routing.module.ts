import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainObservablesComponent} from './main-observables/main-observables.component';

const routes: Routes = [
  { path: '', component: MainObservablesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
