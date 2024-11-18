import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-del',
  templateUrl: './club-del.page.html',
  styleUrls: ['./club-del.page.scss'],
})
export class ClubDelPage implements OnInit {
  restaurants = [
    {
      name: 'World of My Bar',
      location: 'Delhi',
      description: 'Amazing Resto bar, Our absolute favorite',
      rating: '5.0',
      price: '₹400 for 2',
      image: 'https://b.zmtcdn.com/data/pictures/0/19062150/d20318bf19d68ba1e5b6997ff71d3ad7.jpg',
      isFeatured: true,

    },
    {
      name: 'My Bar Headquarters',
      location: 'Delhi',
      description: 'Superb drinks and vibe, nice service',
      rating: '4.0',
      price: '₹800 for 2',
      image: 'https://images.jdmagicbox.com/v2/comp/delhi/e4/011pxx11.xx11.150601181728.c9e4/catalogue/my-bar-headquarters-connaught-place-delhi-north-indian-restaurants-tsonebu0pl.jpg'
    },
    {
      name: 'White Club',
      location: 'Delhi',
      description: 'Good ambience, good food and drinks',
      rating: '4.0',
      price: '₹700 for 2',
      image: 'https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/256/white3-1679302606.webp'
    },
    {
      name: 'The Bar & Lounge',
      location: 'Delhi',
      description: 'Best place for cocktails and music',
      rating: '4.2',
      price: '₹600 for 2',
      image: 'https://b.zmtcdn.com/data/pictures/2/20036192/78d79fe28d6859868a0e3fdf269080e0.jpg?fit=around|750:500&crop=750:500;*,*',
      isFeatured: true,
    },
    {
      name: 'The Drinkery',
      location: 'Delhi',
      description: 'Great place for partying with friends',
      rating: '4.5',
      price: '₹500 for 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLqVDHrqGadMnFP1pcNPVLWlhcxge3RtvTA&s',
      isFeatured: false,
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
