import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-mum',
  templateUrl: './bud-mum.page.html',
  styleUrls: ['./bud-mum.page.scss'],
})
export class BudMumPage implements OnInit {
  restaurants = [
    {
      name: 'Ram Ashraya',
      location: 'Mumbai',
      description: 'Affordable Restaurant',
      rating: 5.0,
      price: '₹450 for 2',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/3/32223/04e510d86f6e4055443fa3f0b5dd9c36.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;,',
    },
    {
      name: 'Fusion Ville',
      location: 'Mumbai',
      description: 'Best food at an affordable price',
      rating: 4.0,
      price: '₹500 for 2',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/8/20860838/ad49b79d00e706b78c34a2ed60bd0476.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;,',
      isFeatured: true,
    },
    {
      name: 'Delhi highway',
      location: 'Mumbai',
      description: 'Amazing food and service',
      rating: 4.5,
      price: '₹400 for 2',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2f/cc/dc/food-images.jpg?w=1100&h=-1&s=1',
      isFeatured: true,
    },
    {
      name: 'Cafe Madras®',
      location: 'Mumbai',
      description: 'Customer service is amazing',
      rating: 4.2,
      price: '₹650 for 2',
      imageUrl: 'https://cdn.thatch.in/cdn-cgi/image/width=3840,format=webp/images/365111/afgdji.png',
    },
    {
      name: 'Burma Burma Restaurant & Tea Room',
      location: 'Mumbai',
      description: 'Can have quality time here',
      rating: 3.8,
      price: '₹500 for 2',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/83/2d/f9/bb.jpg?w=1200&h=-1&s=1',
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
