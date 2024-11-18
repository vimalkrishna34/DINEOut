import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-amr',
  templateUrl: './bud-amr.page.html',
  styleUrls: ['./bud-amr.page.scss'],
})
export class BudAmrPage implements OnInit {
  restaurants = [
    {
      name: 'Firangi Dhaba Amritsar',
      location: 'Amritsar',
      description: 'Affordable Restaurant',
      rating: '5.0',
      price: '₹450 for 2',
      image: 'https://b.zmtcdn.com/data/pictures/7/19274717/25ea3ec97ea307fb5ef9b85bfabb139a.jpg'
    },
    {
      name: 'The Brick House Kitchen',
      location: 'Amritsar',
      description: 'Best food at an affordable price',
      rating: '4.0',
      price: '₹500 for 2',
      image: 'https://b.zmtcdn.com/data/pictures/7/21175517/b92bfd6102f42101466c84221a9a3bfa.jpg?fit=around|960:500&crop=960:500;,',
      isFeatured: true,
    },
    {
      name: 'Bharawan Da Dhaba',
      location: 'Amritsar',
      description: 'Amazing food and service',
      rating: '4.5',
      price: '₹400 for 2',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/d8/6a/20/bharawan-da-dhaba.jpg'
    },
    {
      name: 'Masala Darbaar',
      location: 'Amritsar',
      description: 'Customer service is amazing',
      rating: '4.2',
      price: '₹650 for 2',
      image: 'https://content3.jdmagicbox.com/comp/amritsar/c7/0183px183.x183.220419235341.e6c7/catalogue/masala-darbaar-golden-temple-amritsar-4qid6virj9.jpg',
      isFeatured: true,
    },
    {
      name: 'Kesar Da Dhaba',
      location: 'Amritsar',
      description: 'Can have quality time here',
      rating: '3.8',
      price: '₹500 for 2',
      image: 'https://i.ytimg.com/vi/y6BiTxtPwaY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPsdB8twiXVBjcFwUO7wh29k7LGQ'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
