import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  locations = [
    {
      title: 'Hyderabad & Delhi',
      image: 'assets/per11.jpg',
      description: 'Discover amazing dining options in Hyderabad and Delhi, customized to fit your budget and preferences.',
    },
    {
      title: 'Kochi & Mumbai',
      image: 'assets/per2.jpg',
      description: 'Discover amazing dining options in Kochi and Mumbai, customized to fit your budget and preferences.',
    },
    {
      title: 'Bengaluru & Amritsar',
      image: 'assets/per3.jpg',
      description: 'Discover amazing dining options in Bengaluru and Amritsar, customized to fit your budget and preferences.',
    }
  ];

  constructor() {}

}
