import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDirectiveComponent } from './main-directive/main-directive.component';

const routes: Routes = [
  { path: '', component: MainDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesPipesRoutingModule { }
