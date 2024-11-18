import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
  restaurants = [
    {
      name: 'Jewel Of Nizam',
      location: 'Hyderabad',
      description: 'Amazing Restaurant',
      rating: 5.0,
      price: '₹2000',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/3/96763/9d23148e76a9479d4b6e5bb4a15be1de.jpg',
      isFeatured: true,
    },
    {
      name: 'Tre-Forni Bar & Restaurant',
      location: 'Hyderabad',
      description: 'Extraordinary food and vibe',
      rating: 4.0,
      price: '₹800',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/6/92616/aeb6e494801a643a537b6baf07a4dccc.jpg'
    },
    {
      name: 'So The Sky Kitchen',
      location: 'Hyderabad',
      description: 'Good ambiance, good service and food',
      rating: 4.5,
      price: '₹700',
      imageUrl: 'https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/5436/so-7-1721985145.webp'
    },
    {
      name: 'Spice 6 The Arab Villagio',
      location: 'Hyderabad',
      description: 'Customer service is amazing',
      rating: 4.2,
      price: '₹650',
      imageUrl: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1647350217/vm1lpzi729dfl5cyabht.webp'
    },
    {
      name: 'Krishnapatnam',
      location: 'Hyderabad',
      description: 'Can have quality time here',
      rating: 3.8,
      price: '₹1500',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/1/18808521/bb30043de93f300d6315fc246f2fa62b.jpg',
      isFeatured: true,
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToBooking() {
    this.router.navigate(['/booking']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
