import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Recipe Desc',
      'https://www.slobodenpecat.mk/wp-content/uploads/2023/08/%D0%BF%D0%B5%D1%87%D0%B5%D0%BD-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%87%D1%83%D0%BA-%D1%81%D0%BE-%D1%98%D0%B0%D1%98%D1%86%D0%B0-%D0%A4%D0%BE%D1%82%D0%BE-therecipestuff-in.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 30)]
    ),
    new Recipe(
      'Test Recipe 2',
      'Recipe desc 2',
      'https://upload.wikimedia.org/wikipedia/commons/7/76/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859039238.jpg',
      [new Ingredient('Bun', 1), new Ingredient('Bread', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice(); //slice return new copy exact to this array to avoid updatinig it from outside
  }
}
