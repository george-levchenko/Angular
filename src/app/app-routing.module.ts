import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'components',
    loadChildren: './practice-components/components.module#ComponentsModule' },
  { path: 'components-relation',
    loadChildren: './practice-components-relation/components-relation.module#ComponentsRelationModule' },
  { path: 'directives-pipes',
    loadChildren: './practice-directives-pipes/directives-pipes.module#DirectivesPipesModule' },
  { path: 'http-routing',
    loadChildren: './practice-http-routing/http-routing.module#HttpRoutingModule' },
  { path: 'observables',
    loadChildren: './practice-observables/observables.module#ObservablesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
