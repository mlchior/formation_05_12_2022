import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AddComponent } from './add/add.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientComponent } from './ingredients.component';
import { ListComponent } from './list/list.component';

// Auto generated with the command for lazy loading
// npx ng generate module MODULE_NAME --route ROUTE_NAME --module app.module

@NgModule({
  declarations: [IngredientComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class IngredientsModule {}
