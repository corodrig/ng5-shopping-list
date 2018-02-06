import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Plantains', 3),
    new Ingredient('Butter', 1),
    new Ingredient('Red Onion', 0.5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
