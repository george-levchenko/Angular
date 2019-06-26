import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer, heroReducer } from '@app/practice-store/store/store.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {count: counterReducer,
                hero: heroReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
