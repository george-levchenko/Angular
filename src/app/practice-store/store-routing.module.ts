import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainStoreComponent } from '@app/practice-store/main-store-component/main-store.component';

const routes: Routes = [
  { path: '', component: MainStoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
