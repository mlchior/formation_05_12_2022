import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    private service: RecipesService,
    private snacker: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createRecipe(recipe: Recipe) {
    // Desconstruct the return value to only get the title, since we only use this one property
    this.service.createRecipe(recipe).subscribe(({ title }) => {
      this.snacker.open(`Recipe ${title} created !`, 'OK', { duration: 5000 });
      this.router.navigateByUrl('/');
    });
  }
}
