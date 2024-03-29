import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './common/error/error.component';
import { AddComponent } from './recipes/add/add.component';
import { EditComponent } from './recipes/edit/edit.component';
import { IsNumberGuard } from './recipes/edit/is-number.guard';
import { IsEditingGuard } from './recipes/form/is-editing.guard';
import { ListComponent } from './recipes/list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent, canDeactivate: [IsEditingGuard] },
  // Declare id to be a parameter of the route
  // Add a guard to the route itself
  // To protect children route, use canActivateChild
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [IsNumberGuard],
    canDeactivate: [IsEditingGuard],
  },
  { path: 'ingredients', loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule) },
  { path: 'error', component: ErrorComponent },
  // Redirections always last
  // First redirection : the root url ("/") redirects to another link
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  // Second redirection : the catcher ("**") redirects unknown urls to this page
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  // useHash to avoid setting up the HTTP server to redirect the requests to the root url
  // Used to avoid having to setup a custom server configuration
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
