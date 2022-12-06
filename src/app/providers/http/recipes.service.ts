import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// The syntax of this decorator injects the service into the app module, making it a singleton
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private _url = `http://localhost:3000/recipes`;

  // We create a behaviorSubject, which is an observable we can control (send data into it)
  // We declare it as private, because only the service itself should be able to manipulate it
  // Then, we expose it as an observable, so that other classes can use the observable part of it
  private _recipes = new BehaviorSubject<Recipes>([]);
  public recipes$ = this._recipes.asObservable();

  constructor(private http: HttpClient) {}

  // We call this function to load the recipes into the behavior subject.
  // .next is used to send data into the observable, making the observers (those who call .subscribe on it) react
  loadRecipes() {
    this.getRecipes().subscribe((recipes) => this._recipes.next(recipes));
  }

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

  deleteRecipe(id: number) {
    return this.http.delete(this._url + '/' + id);
  }
}
