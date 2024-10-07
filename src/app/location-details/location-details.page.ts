import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
}
