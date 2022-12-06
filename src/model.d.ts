declare interface Recipe {
  id: number;
  title: string;
  time: number;
  ingredients: {
    name: string;
    qty: number;
    unit: string;
  }[];
}

declare type Recipes = Recipe[];

declare interface Ingredient {
  id: number;
  name: string;
}

declare type Ingredients = Ingredient[];
