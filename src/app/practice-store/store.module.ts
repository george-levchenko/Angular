import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from '@app/practice-store/store-routing.module';
import { MainStoreComponent } from '@app/practice-store/main-store-component/main-store.component';

@NgModule({
  declarations: [MainStoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  exports: [
    MainStoreComponent
  ]
})
export class StoreModule { }
