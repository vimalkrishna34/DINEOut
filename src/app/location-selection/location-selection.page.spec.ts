import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationSelectionPage } from './location-selection.page';

describe('LocationSelectionPage', () => {
  let component: LocationSelectionPage;
  let fixture: ComponentFixture<LocationSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
