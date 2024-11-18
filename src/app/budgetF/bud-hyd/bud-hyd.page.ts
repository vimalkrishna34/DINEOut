import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-hyd',
  templateUrl: './bud-hyd.page.html',
  styleUrls: ['./bud-hyd.page.scss'],
})
export class BudHydPage implements OnInit {
  restaurants = [
    {
      name: 'Cafe Bahar',
      location: 'Hyderabad',
      description: 'Affordable Restaurant',
      rating: '5.0',
      price: '₹450 for 2',
      image: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/03212636/Cafebahar1.jpg'
    },
    {
      name: 'Bawarchi Restaurant',
      location: 'Hyderabad',
      description: 'Best food at an affordable price',
      rating: '4.0',
      price: '₹500 for 2',
      image: 'https://www.bookmytable.co.in/images/1548608844.jpg',
      isFeatured: true,
    },
    {
      name: 'A\'La Liberty',
      location: 'Hyderabad',
      description: 'Amazing food and service',
      rating: '4.5',
      price: '₹400 for 2',
      image: 'https://b.zmtcdn.com/data/pictures/6/18643176/0921301752aefeceff619503d572cc58.jpg'
    },
    {
      name: 'Hotel Shadab',
      location: 'Hyderabad',
      description: 'Customer service is amazing',
      rating: '4.2',
      price: '₹650 for 2',
      image: 'https://b.zmtcdn.com/data/pictures/chains/1/91711/a9a076ff963b190adf0f6ce1973e3711.jpg?fit=around|750:500&crop=750:500;,',
      isFeatured: true,
    },
    {
      name: 'Platform 65-The Train Theme Restaurant',
      location: 'Hyderabad',
      description: 'Can have quality time here',
      rating: '3.8',
      price: '₹500 for 2',
      image: 'https://hospitalitybizindia.com/wp-content/uploads/2022/08/platform65-the-train-Restaurant-kukatpally-slider-3.png'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
