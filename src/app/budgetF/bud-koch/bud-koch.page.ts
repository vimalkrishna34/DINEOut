import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-koch',
  templateUrl: './bud-koch.page.html',
  styleUrls: ['./bud-koch.page.scss'],
})
export class BudKochPage implements OnInit {
  restaurants = [
    {
      name: 'Warehouse Cafe & Restaurant',
      location: 'Kochi',
      description: 'Affordable Restaurant',
      rating: '5.0',
      price: '₹450 for 2',
      image: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/l/t/p110686-166858741063749f922e63d.jpg?tr=tr:n-medium'
    },
    {
      name: 'Paragon',
      location: 'Kochi',
      description: 'Best food at an affordable price',
      rating: '4.0',
      price: '₹500 for 2',
      image: 'https://lh3.googleusercontent.com/A2HTF0CRnlfSKrUu7FJ8rMdbLovG-4is6QEH0FZY6zWzaBBxRrKE93ViJU7OpoKRc7I7WF5XcULzh5XlYTsklv7EbJ1H=w1200-rw',
      isFeatured: true,
    },
    {
      name: 'Canvas',
      location: 'Kochi',
      description: 'Amazing food and service',
      rating: '4.5',
      price: '₹400 for 2',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/b8/63/85/our-face.jpg?w=1200&h=-1&s=1'
    },
    {
      name: 'Restaurant Chef Pillai',
      location: 'Delhi',
      description: 'Customer service is amazing',
      rating: '4.2',
      price: '₹650 for 2',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/22/29/78/ba/nikkah-biryani.jpg'
    },
    {
      name: 'Loafers Corner Cafe',
      location: 'Kochi',
      description: 'Can have quality time here',
      rating: '3.8',
      price: '₹500 for 2',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/a2/5b/7a/loafer-s-corner.jpg',
      isFeatured: true,
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
