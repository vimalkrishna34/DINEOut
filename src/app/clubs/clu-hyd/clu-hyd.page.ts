import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clu-hyd',
  templateUrl: './clu-hyd.page.html',
  styleUrls: ['./clu-hyd.page.scss'],
})
export class CluHydPage implements OnInit {
  restaurants = [
    {
      name: 'Carpe Diem',
      location: 'Hyderabad',
      description: 'Amazing Resto bar, Our absolute fav',
      rating: 5.0,
      price: '₹700 for 2',
      imgSrc: 'https://b.zmtcdn.com/data/pictures/9/18725609/6be66a9b53b7348cd6723824a86ba084.jpg',
      isFeatured: true,
    },
    {
      name: 'Sounds & Spirits',
      location: 'Hyderabad',
      description: 'Superb drinks and vibe, nice service',
      rating: 4.0,
      price: '₹800 for 2',
      imgSrc: 'https://content.jdmagicbox.com/v2/comp/hyderabad/d7/040pxx40.xx40.160310105838.h7d7/catalogue/sound-and-spirits-madhapur-hyderabad-pubs-tk0ffz.jpg'
    },
    {
      name: 'Amnesia Lounge Bar',
      location: 'Hyderabad',
      description: 'Good ambience, good food and drinks',
      rating: 4.5,
      price: '₹700 for 2',
      imgSrc: 'https://b.zmtcdn.com/data/pictures/1/18464791/94690056e5a1e3e4901850a0e27be290.jpg',
      isFeatured: true,
    },
    {
      name: 'Club Rogue',
      location: 'Hyderabad',
      description: 'Customer service is amazing',
      rating: 4.2,
      price: '₹650 for 2',
      imgSrc: 'https://b.zmtcdn.com/data/pictures/2/18615342/af863758304024084ada101ce43450a6.jpg'
    },
    {
      name: 'Kismet The Park Hyderabad',
      location: 'Hyderabad',
      description: 'Can vibe with friends',
      rating: 3.8,
      price: '₹500 for 2',
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/65/3c/34/a-luxury-pub-that-gives.jpg?w=1200&h=-1&s=1'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Go back to the home page
  goBack() {
    this.router.navigate(['/home']);
  }
 
}
