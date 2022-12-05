import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private _url = `http://localhost:3000/recipes`;

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipes>(this._url);
  }

  createRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this._url, recipe);
  }

  updateRecipe(recipe: Recipe) {
    return this.http.put<Recipe>(this._url, recipe);
  }
}
