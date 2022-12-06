import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private _url = 'http://localhost:3000/ingredients';

  private _ingredients = new BehaviorSubject<Ingredients>([]);
  public ingredients$ = this._ingredients.asObservable();

  constructor(private http: HttpClient) {
    this.loadIngredients();
  }

  loadIngredients() {
    this.getIngredients().subscribe((result) => this._ingredients.next(result));
  }

  getIngredients() {
    return this.http.get<Ingredients>(this._url);
  }

  deleteIngredient(id: number) {
    return this.http
      .delete(this._url + '/' + id)
      .pipe(tap(() => this.loadIngredients()));
  }


  addIngredient(ingredient: Partial<Ingredient>) {
    return this.http
      .post<Ingredient>(this._url, ingredient)
      // .tap is an operator that does a side effect, without changing the observable.
      // it can use the content of the observable if needed, but can't return anything, since it will be lost.
      .pipe(tap(() => this.loadIngredients()));
  }
}
