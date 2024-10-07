import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
  selectedDate: string | undefined;
  selectedTime: string | undefined;
  toastButtons = [{ text: 'Close', role: 'cancel' }];

  constructor(private toastController: ToastController) {}

  async confirmBooking() {
    if (this.selectedDate && this.selectedTime) {
      // Use ToastController to create and present the toast
      const toast = await this.toastController.create({
        message: 'Your booking has been confirmed!',
        duration: 3000,
        buttons: this.toastButtons,
        cssClass: 'custom-toast'
      });
      await toast.present();
    } else {
      alert("Please select both date and time.");
    }
  }
}
