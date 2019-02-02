import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponentComponent } from './main-component/main-component.component';
import {SyntaxComponent} from './syntax/syntax.component';
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {DynamicFormsComponent} from './dynamic-forms/dynamic-forms.component';

const childRoutes: Routes = [
  { path: 'syntax', component: SyntaxComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'dynamic-forms', component: DynamicFormsComponent },
  { path: '', component: SyntaxComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

const routes: Routes = [
  { path: '', component: MainComponentComponent,
    children: childRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
