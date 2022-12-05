import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private _url = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipes>(this._url + '/recipes');
  }
}
