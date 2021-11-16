import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Macaroni spaghetti',
      imageUrl: 'https://www.delishph.com/wp-content/uploads/2019/09/no-bake-baked-mac_blog-768x512.jpg',
      ingredients: ['Macaroni pasta', 'Cream', 'Cheese']
    },
    {
      id: 'r2',
      title: 'Spaghetti Special',
      imageUrl: 'https://pngimg.com/uploads/spaghetti/spaghetti_PNG23.png',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: 'r3',
      title: 'Carbonara',
      // eslint-disable-next-line max-len
      imageUrl: 'https://www.simplyrecipes.com/thmb/JmbyFgXfrsRSSOtNg4mPZoMt-BM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spaghetti-Carbonara-LEAD-6-b3880a6eb49f4158be6f13885c797ded.jpg',
      ingredients: ['Pasta', 'Cream milk', 'bacon']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
