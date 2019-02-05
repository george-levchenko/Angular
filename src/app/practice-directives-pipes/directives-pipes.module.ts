import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesPipesRoutingModule } from './directives-pipes-routing.module';
import { MainDirectiveComponent } from './main-directive/main-directive.component';
import { HighlightDirective } from './directive-highlight/highlight.directive';
import { BoldDirective } from './directive-bold/bold.directive';
import { UnlessDirective } from './directive-unless/unless.directive';
import {ExponentialPipe} from './pipe-exponential/exponential.pipe';


@NgModule({
  declarations: [
    MainDirectiveComponent,
    HighlightDirective,
    BoldDirective,
    UnlessDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    DirectivesPipesRoutingModule
  ],
  providers: [ExponentialPipe],
  exports: [
    MainDirectiveComponent,
    HighlightDirective,
    BoldDirective,
    UnlessDirective,
    ExponentialPipe
  ]
})

export class DirectivesPipesModule { }
