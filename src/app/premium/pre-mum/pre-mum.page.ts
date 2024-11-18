import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-mum',
  templateUrl: './pre-mum.page.html',
  styleUrls: ['./pre-mum.page.scss'],
})
export class PreMumPage implements OnInit {
  restaurants = [
    {
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2d/94/83/tresind-mumbai.jpg?w=1200&h=-1&s=1',
      name: 'Trèsind Mumbai',
      location: 'Mumbai',
      description: 'Amazing Restaurant',
      rating: '5.0',
      price: '₹2000 for 2'
    },
    {
      imgSrc: 'https://taogroup.com/wp-content/uploads/2024/05/Yauatcha-Mumbai-Dining-Area3-scaled-1.jpg',
      name: 'Yauatcha',
      location: 'Mumbai',
      description: 'Extraordinary food and vibe',
      rating: '4.0',
      price: '₹800 for 2',
      isFeatured: true,
    },
    {
      imgSrc: 'https://images.jdmagicbox.com/v2/comp/mumbai/18/022p8403918/catalogue/dakshin-coastal-itc-maratha-hotel-sahar-andheri-east-mumbai-restaurants-44tuolf.jpg',
      name: 'Dakshin Coastal',
      location: 'Mumbai',
      description: 'Good ambiance, good service and food',
      rating: '4.5',
      price: '₹700 for 2',
      isFeatured: true,
    },
    {
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/3c/c2/49/interiors-at-k-k.jpg?w=400&h=-1&s=1',
      name: 'Citrus - Fine Dining Restaurant',
      location: 'Mumbai',
      description: 'Customer service is amazing',
      rating: '4.2',
      price: '₹650 for 2'
    },
    {
      imgSrc: 'https://b.zmtcdn.com/data/pictures/0/38790/690e13cbeada32faa46d8063d3708c08.jpg',
      name: 'Nawab Saheb',
      location: 'Mumbai',
      description: 'Can have quality time here',
      rating: '3.8',
      price: '₹1500 for 2'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
