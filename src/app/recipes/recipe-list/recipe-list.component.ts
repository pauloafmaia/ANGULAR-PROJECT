import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-576x1024.png?ezimgfmt=ng:webp/ngcb1')
  ];

  constructor() { }

  ngOnInit() {

  }

}
