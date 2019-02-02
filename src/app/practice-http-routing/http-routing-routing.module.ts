import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainHttpRoutingComponent} from './main-http-routing/main-http-routing.component';
import {PracticeLinkComponent} from './practice-link/practice-link.component';
import {PracticeIdComponent} from './practice-id/practice-id.component';
import {CanActivateGuard} from './guards/can-activate.guard';
import {CanDeactivateGuard} from './guards/can-deactivate.guard';


const childRoutes: Routes = [
  { path: 'practice-link', component: PracticeLinkComponent},
  { path: 'practice-id/:id', component: PracticeIdComponent, canActivate: [CanActivateGuard], canDeactivate: [CanDeactivateGuard] },
  { path: '', redirectTo: 'practice-link', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

const routes: Routes = [
  { path: '', component: MainHttpRoutingComponent,
  children: childRoutes}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingRoutingModule { }
