import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRelationRoutingModule } from './components-relation-routing.module';
import { MainComponentRelationComponent } from './main-component-relation/main-component-relation.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { VariableComponent } from './variable/variable.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { ConstructorRelationComponent } from './constructor-relation/constructor-relation.component';
import { ServiceRelationComponent } from './service-relation/service-relation.component';

@NgModule({
  declarations: [
                  MainComponentRelationComponent,
                  InputOutputComponent,
                  VariableComponent,
                  NgcontentComponent,
                  ViewchildComponent,
                  ContentchildComponent,
                  ConstructorRelationComponent,
                  ServiceRelationComponent
  ],
  imports: [
    CommonModule,
    ComponentsRelationRoutingModule
  ]
})
export class ComponentsRelationModule { }
