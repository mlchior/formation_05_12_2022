import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './common/error/error.component';
import { ListComponent } from './recipes/list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'error', component: ErrorComponent },
  // Redirections always last
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
