import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// The syntax of this decorator injects the service into the app module, making it a singleton
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private _url = `http://localhost:3000/recipes`;

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipes>(this._url);
  }

  getRecipe(id: string) {
    return this.http.get<Recipe>(this._url + '/' + id);
  }

  createRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this._url, recipe);
  }

  updateRecipe(id: string, recipe: Recipe) {
    return this.http.put<Recipe>(this._url + '/' + id, recipe);
  }
}
