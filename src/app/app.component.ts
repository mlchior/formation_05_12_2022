import { Component } from '@angular/core';
import { RecipesService } from './providers/http/recipes.service';

@Component({
  // CSS selector that will be used to display the component
  selector: 'app-root',
  // Template file
  templateUrl: './app.component.html',
  // List of style urls to use for this component
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: RecipesService) {}
}
