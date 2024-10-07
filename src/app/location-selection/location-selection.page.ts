import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.page.html',
  styleUrls: ['./location-selection.page.scss'],
})
export class LocationSelectionPage {
goBack() {
throw new Error('Method not implemented.');
}

  constructor(private navCtrl: NavController) { }

  goToLocation(city: string) {
    switch(city) {
      case 'Hyderabad':
        this.navCtrl.navigateForward('/hyderabad');
        break;
      case 'Delhi':
        this.navCtrl.navigateForward('/delhi');
        break;
      case 'Mumbai':
        this.navCtrl.navigateForward('/mumbai');
        break;
      case 'Kochi':
        this.navCtrl.navigateForward('/kochi');
        break;
      case 'Amritsar':
        this.navCtrl.navigateForward('/amritsar');
        break;
      case 'Bengaluru':
        this.navCtrl.navigateForward('/bengaluru');
        break;
      default:
        console.error('Invalid city:', city);
        break;
    }
  }
}
