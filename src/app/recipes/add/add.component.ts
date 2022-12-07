import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecipesService } from '../../providers/http/recipes.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  // Get a child component with its class
  // Use static true to use it in onInit instead of afterViewInit
  @ViewChild(FormComponent, { static: true }) formComponent!: FormComponent;

  constructor(
    private service: RecipesService,
    private snacker: MatSnackBar,
    private router: Router
  ) {}

  createRecipe(recipe: Recipe) {
    // Desconstruct the return value to only get the title, since we only use this one property
    this.service.createRecipe(recipe).subscribe(({ title }) => {
      this.snacker.open(`Recipe ${title} created !`, 'OK', { duration: 5000 });
      this.router.navigateByUrl('/');
    });
  }
}
