import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';

// Auto generated with the command for lazy loading
// npx ng generate module MODULE_NAME --route ROUTE_NAME --module app.module

@NgModule({
  declarations: [IngredientsComponent],
  imports: [CommonModule, IngredientsRoutingModule],
})
export class IngredientsModule {}
