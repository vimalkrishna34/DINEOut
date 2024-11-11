import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from Angular's router
import { RefresherEventDetail } from '@ionic/angular';
import { IonRefresherCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('hiddenSearchInput', { static: false }) hiddenSearchInput!: ElementRef;

  isSearchVisible = false;
Explore: any;

  constructor(private router: Router) {} 

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    if (this.isSearchVisible) {
      setTimeout(() => {
        this.hiddenSearchInput.nativeElement.setFocus();
      }, 100);
    }
  }
  navigateToBooking() {
    this.router.navigate(['/table-booking']);
  }
 

}
