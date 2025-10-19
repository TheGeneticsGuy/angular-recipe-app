import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})

export class ShoppingList implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
      this.ingredients = this.slService.getIngredients();
      this.slService.ingredientsChanged.subscribe(
          (ingredients: Ingredient[]) => {
              this.ingredients = ingredients;
          }
      );
  }

}
