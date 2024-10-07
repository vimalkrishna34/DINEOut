import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  restaurant: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // Fetch the restaurant data using the id
    this.restaurant = {
      name: 'Hyderabad Grill',
      cuisine: 'Indian',
      budget: 500,
      image: 'https://example.com/hyderabad-grill.jpg',
      description: 'Delicious Indian food in the heart of Hyderabad.',
    };
  }

  addToFavorites() {
    // Logic to add to favorites
  }
}
