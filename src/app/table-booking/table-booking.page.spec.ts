import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableBookingPage } from './table-booking.page';

describe('TableBookingPage', () => {
  let component: TableBookingPage;
  let fixture: ComponentFixture<TableBookingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
