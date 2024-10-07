import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.page.html',
  styleUrls: ['./location-selection.page.scss'],
})
export class LocationSelectionPage {
  locations: string[] = ['Hyderabad', 'Delhi', 'Kochi', 'Mumbai', 'Bengaluru', 'Amritsar', 'Kerala', 'Vizag'];

  constructor(private router: Router) {}

  selectLocation(location: string) {
    // You can add logic to store the selected location if needed.
    // For example, navigate to a specific page based on selection:
    this.router.navigate(['/selected-location', { location: location }]);
  }
}
