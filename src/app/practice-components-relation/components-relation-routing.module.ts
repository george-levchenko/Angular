import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponentRelationComponent} from './main-component-relation/main-component-relation.component';

const routes: Routes = [
  { path: '', component: MainComponentRelationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRelationRoutingModule { }
