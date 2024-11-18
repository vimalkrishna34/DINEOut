import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-koch',
  templateUrl: './clu-koch.page.html',
  styleUrls: ['./clu-koch.page.scss'],
})
export class CluKochPage implements OnInit {
  // Array of restaurant data for Kochi
  restaurants = [
    {
      name: 'Watson\'s',
      location: 'Kochi',
      description: 'Amazing Resto bar, Our absolute fav',
      image: 'https://th-i.thgim.com/public/incoming/abcnk9/article66964437.ece/alternates/FREE_1200/HVE06876-HDR.JPG',
      rating: 5.0,
      costForTwo: 700,
      isFeatured: true,
    },
    {
      name: 'Blue Rock Resto Bar',
      location: 'Kochi',
      description: 'Superb drinks and vibe, nice service',
      image: 'https://d4t7t8y8xqo0t.cloudfront.net/app//resized/818X450/restaurant/687668/restaurant320230322072556.jpg',
      rating: 4.0,
      costForTwo: 800
    },
    {
      name: 'Rocks & Brews',
      location: 'Kochi',
      description: 'Good ambience, good food and drinks',
      image: 'https://1033609670.rsc.cdn77.org/rests/original/110_507293523.jpg',
      rating: 4.5,
      costForTwo: 700,
      isFeatured: true,
    },
    {
      name: 'Mattancherry Bar',
      location: 'Kochi',
      description: 'Customer service is amazing',
      image: 'https://cdn.venuelook.com/uploads/space_13597/1515147526_595x400.png',
      rating: 4.2,
      costForTwo: 650
    },
    {
      name: 'Mezzo',
      location: 'Kochi',
      description: 'Can vibe with friends',
      image: 'https://pix8.agoda.net/hotelImages/437/43751/43751_14041117430019054687.jpg?ca=2&ce=1&s=1024x768',
      rating: 3.8,
      costForTwo: 500
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Function to navigate back to the home page
  goBack() {
    this.router.navigate(['/home']);
  }
}
