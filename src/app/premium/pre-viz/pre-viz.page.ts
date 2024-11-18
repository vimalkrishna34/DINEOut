import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-viz',
  templateUrl: './pre-viz.page.html',
  styleUrls: ['./pre-viz.page.scss'],
})
export class PreVizPage implements OnInit {
  restaurants = [
    {
      name: "Sam's Griddle",
      location: "Vishakpatnam",
      description: "Amazing Restaurant",
      rating: 5.0,
      priceForTwo: "₹2000 for 2",
      imageUrl: "https://b.zmtcdn.com/data/pictures/0/18740940/7dcd0adde08da4e68e10b01ba182b415.jpg",
      isFeatured: true,
    },
    {
      name: "The Square",
      location: "Vishakpatnam",
      description: "Extraordinary food and vibe",
      rating: 4.0,
      priceForTwo: "₹800 for 2",
      imageUrl: "https://b.zmtcdn.com/data/pictures/2/2800052/5e2709fd7730fdb2cbdb5716a381872a.jpg",
      isFeatured: true,
    },
    {
      name: "Horizon Restaurant",
      location: "Vishakpatnam",
      description: "Good ambiance, good service and food",
      rating: 4.5,
      priceForTwo: "₹700 for 2",
      imageUrl: "https://b.zmtcdn.com/data/pictures/3/19903263/75f9562ba8c86e57bab18121d5c225b2.png"
    },
    {
      name: "Mekong Restaurant",
      location: "Vishakpatnam",
      description: "Customer service is amazing",
      rating: 4.2,
      priceForTwo: "₹650 for 2",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/42/fb/c3/california-roll.jpg"
    },
    {
      name: "WelcomCafe Oceanic Restaurant",
      location: "Vishakpatnam",
      description: "Can have quality time here",
      rating: 3.8,
      priceForTwo: "₹1500 for 2",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/6f/e1/66/getlstd-property-photo.jpg"
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
