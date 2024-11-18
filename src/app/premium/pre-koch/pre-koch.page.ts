import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-koch',
  templateUrl: './pre-koch.page.html',
  styleUrls: ['./pre-koch.page.scss'],
})
export class PreKochPage implements OnInit {
  restaurants = [
    {
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/99/9b/2b/img-20180410-wa0084-largejpg.jpg',
      name: 'Zoka',
      location: 'Kochi',
      description: 'Amazing Restaurant',
      rating: '5.0',
      price: '₹1000 for 2',
      isFeatured: true,
    },
    {
      imageUrl: 'https://im.whatshot.in/img/2023/Jun/1-1687752423.jpg',
      name: 'Skygrill',
      location: 'Kochi',
      description: 'Extraordinary food and vibe',
      rating: '4.0',
      price: '₹800 for 2'
    },
    {
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/18/af/ae/88/thai-soul.jpg',
      name: 'Thai Soul',
      location: 'Kochi',
      description: 'Good ambiance, good service and food',
      rating: '4.5',
      price: '₹700 for 2',
      isFeatured: true,
    },
    {
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/28/5a/7e/b0/feast-your-eyes-on-the.jpg',
      name: 'Roastown Global Grill-Cochin',
      location: 'Kochi',
      description: 'Customer service is amazing',
      rating: '4.2',
      price: '₹650 for 2'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHZy8n_qMNJGD5yab3fGq4wjJDoG7DF6JsA&s',
      name: 'Fusion Bay',
      location: 'Kochi',
      description: 'Can have quality time here',
      rating: '3.8',
      price: '₹1500 for 2'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
