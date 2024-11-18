import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-amr',
  templateUrl: './clu-amr.page.html',
  styleUrls: ['./clu-amr.page.scss'],
})
export class CluAmrPage implements OnInit {

  restaurants = [
    {
      name: 'Pyramid',
      location: 'Amritsar',
      description: 'Amazing Resto bar, Our absolute fav',
      rating: 5.0,
      price: '₹700 for 2',
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/09/93/1d/pyramid-amritsar.jpg?w=700&h=-1&s=1',
      isFeatured: true,
    },
    {
      name: 'Egyptian Brewery',
      location: 'Amritsar',
      description: 'Superb drinks and vibe, nice service',
      rating: 4.0,
      price: '₹800 for 2',
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/45/dd/85/getlstd-property-photo.jpg?w=1200&h=-1&s=1'
    },
    {
      name: 'Irish Beach',
      location: 'Amritsar',
      description: 'Good ambience, good food and drinks',
      rating: 4.5,
      price: '₹700 for 2',
      imgSrc: 'https://media.bookeventz.com/html/bookeventz.com/images/restaurant-picture/irish-beach-15886504021031590240642-0.jpg',
      isFeatured: true,
    },
    {
      name: 'Peddlers',
      location: 'Amritsar',
      description: 'Customer service is amazing',
      rating: 4.2,
      price: '₹650 for 2',
      imgSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/07/f0/20/64/peddlers-amritsar.jpg'
    },
    {
      name: 'Nimo Club Amritsar',
      location: 'Amritsar',
      description: 'Can vibe with friends',
      rating: 3.8,
      price: '₹500 for 2',
      imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/421129729.jpg?k=8a68ac3a7cfd426d50a5b9f5350f26704c570787928616069b85d933683378e4&o=&hp=1',
      isFeatured: true,
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Go back to the home page
  goBack() {
    this.router.navigate(['/home']);
  }
}
