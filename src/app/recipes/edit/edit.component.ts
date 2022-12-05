import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs/operators';
import { RecipesService } from '../../providers/http/recipes.service';
import { FormComponent } from '../form/form.component';

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

  // Get a view child with a name instead of the class instance
  @ViewChild('formCmp', { static: true }) formComponent!: FormComponent;

  constructor(
    private service: RecipesService,
    private snacker: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  editRecipe(recipe: Recipe) {
    const { id } = this.route.snapshot.params;

    this.service.updateRecipe(id, recipe).subscribe(({ title }) => {
      this.snacker.open(`Recipe ${title} updated !`, 'OK', { duration: 5000 });
      this.router.navigateByUrl('/');
    });
  }
}
