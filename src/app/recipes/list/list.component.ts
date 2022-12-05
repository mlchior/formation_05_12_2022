import { Component } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  // Create an observable from an HTTP call, and use shareReplay to use the last value it received, which will avoid making the HTTP call everytime the observable is observed
  recipes$ = this.service.getRecipes().pipe(shareReplay(1));

  recipes: Recipes = [];

  constructor(private service: RecipesService) {}
}
