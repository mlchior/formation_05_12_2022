import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs/operators';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  recipe$ = this.route.params.pipe(
    switchMap(({ id }) => this.service.getRecipe(id)),
    shareReplay(1)
  );

  constructor(
    private service: RecipesService,
    private snacker: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  editRecipe(recipe: Recipe) {
    this.service.updateRecipe(recipe).subscribe(({ title }) => {
      this.snacker.open(`Recipe ${title} updated !`, 'OK', { duration: 5000 });
      this.router.navigateByUrl('/');
    });
  }
}
