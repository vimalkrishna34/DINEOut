import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface RestaurantCard {
  title: string;
  imageUrl: string;
  altText: string;
  link: string;
}


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  location: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the location parameter from the route
    this.location = this.route.snapshot.paramMap.get('location') || 'Unknown';
  }
  restaurantCards: RestaurantCard[] = [
    {
      title: 'Premium Restaurant',
      imageUrl: 'https://i.pinimg.com/564x/8d/bf/b6/8dbfb612dd9709512e85ca1018bb43e7.jpg',
      altText: 'Premium Restaurant',
      link: '#'
    },
    {
      title: 'Budget-friendly Restaurant',
      imageUrl: 'https://i.pinimg.com/564x/d5/4b/45/d54b457216d2c84be14f43280032b9e2.jpg',
      altText: 'Budget-friendly Restaurant',
      link: '#'
    },
    {
      title: 'Clubs & Pubs',
      imageUrl: 'https://i.pinimg.com/564x/9c/02/67/9c0267f14cec41b97e700245820e835d.jpg',
      altText: 'Clubs & Pubs',
      link: '#'
    }
  ];

}
