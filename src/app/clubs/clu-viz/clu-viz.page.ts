import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-viz',
  templateUrl: './clu-viz.page.html',
  styleUrls: ['./clu-viz.page.scss'],
})
export class CluVizPage implements OnInit {
  restaurants = [
    {
      image: 'https://content.jdmagicbox.com/comp/visakhapatnam/g1/0891px891.x891.180124190419.w2g1/catalogue/myz-uno-brew-pub-siripuram-visakhapatnam-pubs-9gwfshfo92-250.jpg',
      name: 'MYZ - UNO Vizag',
      location: 'Vishakpatnam',
      description: 'Amazing Resto bar, Our absolute fav',
      rating: '5.0',
      cost: 700,
      isFeatured: true,
    },
    {
      image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701161024592063-e2d22351-5ea7-4657-aa76-34dbeeb85e86.jpg',
      name: 'Tribe The Night Club',
      location: 'Vishakpatnam',
      description: 'Superb drinks and vibe, nice service',
      rating: '4.0',
      cost: 800, isFeatured: true,
    },
    {
      image: 'https://content.jdmagicbox.com/comp/visakhapatnam/x8/0891px891.x891.220228190755.k2x8/catalogue/somaa-yendada-visakhapatnam-restaurants-and-bars-5vp1tts8vv.jpg',
      name: 'SOMAA',
      location: 'Vishakpatnam',
      description: 'Good ambience, good food and drinks',
      rating: '4.5',
      cost: 700
    },
    {
      image: 'https://content3.jdmagicbox.com/comp/visakhapatnam/f2/0891px891.x891.230910151732.k4f2/catalogue/viragoo-neo-age-pub-bheemili-visakhapatnam-pubs-8dqq6voh87.jpg',
      name: 'Viragoo Neo Age Pub',
      location: 'Vishakpatnam',
      description: 'Customer service is amazing',
      rating: '4.2',
      cost: 650
    },
    {
      image: 'https://preview.redd.it/pub-in-vizag-v0-79leff7vwkvc1.jpeg?width=1360&format=pjpg&auto=webp&s=d15790541c811ff5bf69f1b3f34a7767ba6a5c44',
      name: 'Cosmic House',
      location: 'Vishakpatnam',
      description: 'Can vibe with friends',
      rating: '3.8',
      cost: 500
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
