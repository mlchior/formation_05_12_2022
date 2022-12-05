import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.service.getRecipes().subscribe((recipes) => {
      console.log(recipes);
    });
  }
}
