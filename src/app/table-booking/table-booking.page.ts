// table-booking.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.page.html',
  
  styleUrls: ['./table-booking.page.scss'],
})
export class TableBookingPage implements OnInit {
  bookingForm: FormGroup;
  confirmationMessage: string | undefined;
  router: any;

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.bookingForm = this.fb.group({
      city: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.bookingForm.valid) {
      const { city, date, time } = this.bookingForm.value;
      // Here you can handle the booking logic (e.g., send data to server)
      this.confirmationMessage = `Table booked successfully in ${city} on ${date} at ${time}!`;
      this.bookingForm.reset();
    }
  }
  navigateToBooking() {
    this.router.navigate(['/table-booking']);
  }

}
