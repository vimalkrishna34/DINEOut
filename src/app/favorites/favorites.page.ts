import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  favoriteRestaurants = [
    { name: 'Hyderabad Grill', cuisine: 'Indian', budget: 500 },
    { name: 'Delhi Flavors', cuisine: 'Mughlai', budget: 700 },
  ];

  constructor() {}
}
