import { Component, EventEmitter , Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://jamdownfoodie.com/wp-content/uploads/2021/05/IMG_3041-585x585.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://jamdownfoodie.com/wp-content/uploads/2021/05/IMG_3041-585x585.jpg'
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
