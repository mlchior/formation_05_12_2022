import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  // Create an observable from an HTTP call, and use shareReplay to use the last value it received, which will avoid making the HTTP call everytime the observable is observed
  recipes$ = this.service.recipes$;

  recipes: Recipes = [];

  constructor(private service: RecipesService, private snacker: MatSnackBar) {
    this.service.loadRecipes();
  }

  deleteRecipe({ id, title }: Recipe) {
    if (confirm('Are you sure you want to delete your recipe ' + title + '?')) {
      this.service.deleteRecipe(id).subscribe(() => {
        this.snacker.open('Recipe ' + title + ' deleted !', 'OK');
        this.service.loadRecipes();
      });
    }
  }
}
