import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'components',
    loadChildren: () => import('./practice-components/components.module').then(m => m.ComponentsModule) },
  { path: 'components-relation',
    loadChildren: () => import('./practice-components-relation/components-relation.module').then(m => m.ComponentsRelationModule) },
  { path: 'directives-pipes',
    loadChildren: () => import('./practice-directives-pipes/directives-pipes.module').then(m => m.DirectivesPipesModule) },
  { path: 'http-routing',
    loadChildren: () => import('./practice-http-routing/http-routing.module').then(m => m.HttpRoutingModule) },
  { path: 'observables',
    loadChildren: () => import('./practice-observables/observables.module').then(m => m.ObservablesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
