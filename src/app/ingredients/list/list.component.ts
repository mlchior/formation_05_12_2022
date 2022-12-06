import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../providers/http/ingredients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  ingredients$ = this.service.ingredients$;

  constructor(private service: IngredientsService) {
    this.service.loadIngredients();
  }

  ngOnInit(): void {}

  deleteIngredient(ingredient: Ingredient) {
    // We have to write .subscribe here, even if we do nothing, otherwise the observable is not triggered
    this.service.deleteIngredient(ingredient.id).subscribe();
  }
}
