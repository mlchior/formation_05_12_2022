import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { RecipesService } from '../../providers/http/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  recipes$ = this.service.getRecipes().pipe(shareReplay(1));

  constructor(private service: RecipesService) {}

  ngOnInit(): void {}
}
