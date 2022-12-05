import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private service: RecipesService,
    private snacker: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  editRecipe(recipe: Recipe) {
    this.service.updateRecipe(recipe).subscribe(({ title }) => {
      this.snacker.open(`Recipe ${title} updated !`, 'OK', { duration: 5000 });
      this.router.navigateByUrl('/');
    });
  }
}
