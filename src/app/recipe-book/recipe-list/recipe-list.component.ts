import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mangú', 'Dominican mashed plantains', 'https://media4.s-nbcnews.com/i/newscms/2015_18/511891/mangu-stock-today-150427_a9b0b7fcdf545f4934e89b909314e61d.jpg'),
    new Recipe('Sancocho', 'Dominican meat stew', 'https://www.dominicancooking.com/wp-content/uploads/2013/05/vegan-sancocho-roots-stew-5.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
