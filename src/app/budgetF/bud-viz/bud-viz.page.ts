import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-viz',
  templateUrl: './bud-viz.page.html',
  styleUrls: ['./bud-viz.page.scss'],
})
export class BudVizPage implements OnInit {
  restaurants = [
    {
      image: 'https://b.zmtcdn.com/data/pictures/chains/3/2800083/2598f0d835a74113507a34eea43e155e.jpg',
      name: 'My Restaurant',
      location: 'Vishakpatnam',
      description: 'Affordable Restaurant',
      rating: '5.0',
      price: '₹450 for 2',
      isFeatured: true,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpcuJYpFXeawW4e5BY8CvlRDQwJUlVfDqUG7tlijT6yr_YvgyP-4ETde83ItA1mOKnRY&usqp=CAU',
      name: 'Zeeshan Restaurant',
      location: 'Vishakpatnam',
      description: 'Best food at an affordable price',
      rating: '4.0',
      price: '₹500 for 2',
      isFeatured: true,
    },
    {
      image: 'https://content.jdmagicbox.com/comp/visakhapatnam/v8/0891px891.x891.230907101508.p2v8/catalogue/bot-9-ai-themed-restaurant-pothinamallayya-palem-visakhapatnam-restaurants-0g3u05i6tq.jpg',
      name: 'Bot 9 AI Themed Restaurant',
      location: 'Vishakpatnam',
      description: 'Amazing food and service',
      rating: '4.5',
      price: '₹400 for 2'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/9a/0f/23/a-symphony-of-flavors.jpg?w=1200&h=-1&s=1',
      name: 'Varun\'s Eat Restaurant',
      location: 'Vishakpatnam',
      description: 'Customer service is amazing',
      rating: '4.2',
      price: '₹650 for 2',
      isFeatured: true,
    },
    {
      image: 'https://b.zmtcdn.com/data/pictures/7/20674407/31925247a0141db017dbfa5d780c3cb5.jpg?fit=around|960:500&crop=960:500;',
      name: 'Hotel Jas',
      location: 'Vishakpatnam',
      description: 'Can have quality time here',
      rating: '3.8',
      price: '₹500 for 2'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/home']);
  }

}
