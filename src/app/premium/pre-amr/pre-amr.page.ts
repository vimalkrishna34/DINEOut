import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pre-amr',
  templateUrl: './pre-amr.page.html',
  styleUrls: ['./pre-amr.page.scss'],
})
export class PreAmrPage implements OnInit {
  restaurants = [
    {
      title: 'Ambrocia Restaurant',
      location: 'Amritsar',
      description: 'Amazing Restaurant',
      image: 'https://b.zmtcdn.com/data/pictures/0/20295600/a41d5f48f44ab5d6c5512e80200cf4b5.jpg',
      rating: '5.0',
      price: 2000
    },
    {
      title: 'Crystal Restaurant',
      location: 'Amritsar',
      description: 'Extraordinary food and vibe',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/97/13/69/photo1jpg.jpg',
      rating: '4.0',
      price: 800,
      isFeatured: true,
    },
    {
      title: 'Hangries Amritsar',
      location: 'Amritsar',
      description: 'Good ambiance, good service and food',
      image: 'https://content.jdmagicbox.com/comp/amritsar/r3/0183px183.x183.220331235237.z8r3/catalogue/hangries-sultanwind-amritsar-restaurants-cbbvt2bb64.jpg',
      rating: '4.5',
      price: 700
    },
    {
      title: 'Astoria Food Pavilion',
      location: 'Amritsar',
      description: 'Customer service is amazing',
      image: 'https://lh3.googleusercontent.com/CaNs3MQeSTo5YjqmlUnEGcNrJGJMrbw6DZlknxI1C-3ohH5xaDvA1hb2CG9NIFEZYXxrycOghFjQWrjPJ8AGlm4Mxw=w192-rw',
      rating: '4.2',
      price: 650
    },
    {
      title: 'Ziva',
      location: 'Amritsar',
      description: 'Can have quality time here',
      image: 'https://b.zmtcdn.com/data/pictures/0/2200340/704dad0dce6ea06e07b1b58cddf8d93e.jpg?fit=around|750:500&crop=750:500;',
      rating: '3.8',
      price: 1500,
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


