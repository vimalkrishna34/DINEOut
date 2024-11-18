import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-mum',
  templateUrl: './clu-mum.page.html',
  styleUrls: ['./clu-mum.page.scss'],
})
export class CluMumPage implements OnInit {
  restaurants = [
    {
      name: 'Tryst Mumbai',
      location: 'Mumbai',
      description: 'Amazing Resto bar, Our absolute fav',
      image: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2017/11/12220729/23102017_tryst01.jpg',
      rating: 5.0,
      costForTwo: 700,
      isFeatured: true,
    },
    {
      name: 'Yeda Republic',
      location: 'Mumbai',
      description: 'Superb drinks and vibe, nice service',
      image: 'https://b.zmtcdn.com/data/pictures/0/18623400/3c57db2d3022a257a9f1550fbb17edd4.jpg',
      rating: 4.0,
      costForTwo: 800
    },
    {
      name: 'Kitty Su Mumbai',
      location: 'Mumbai',
      description: 'Good ambience, good food and drinks',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPj2uJ859WGi3RiPbSEMoDkmZr6yT51fWaLQ&s',
      rating: 4.5,
      costForTwo: 700,
      isFeatured: true,
    },
    {
      name: 'Cavalry The Lounge',
      location: 'Mumbai',
      description: 'Customer service is amazing',
      image: 'https://b.zmtcdn.com/data/pictures/0/18476910/264732a17eaad1da658d7514486ca75d.jpg',
      rating: 4.2,
      costForTwo: 650
    },
    {
      name: 'Dragonfly Experience Mumbai',
      location: 'Mumbai',
      description: 'Can vibe with friends',
      image: 'https://b.zmtcdn.com/data/pictures/chains/9/18896889/25a3afe25a2df53f5655e6fb87243b51.jpg',
      rating: 3.8,
      costForTwo: 500,
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
