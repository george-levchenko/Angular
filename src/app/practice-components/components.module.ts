import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { SyntaxComponent } from './syntax/syntax.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { MainComponentComponent } from './main-component/main-component.component';


@NgModule({
  declarations: [
    MainComponentComponent,
    SyntaxComponent,
    LifecycleHooksComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    DynamicFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponentComponent,
    SyntaxComponent,
    LifecycleHooksComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    DynamicFormsComponent
  ]
})
export class ComponentsModule { }
