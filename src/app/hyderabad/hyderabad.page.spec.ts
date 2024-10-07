import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HyderabadPage } from './hyderabad.page';

describe('HyderabadPage', () => {
  let component: HyderabadPage;
  let fixture: ComponentFixture<HyderabadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
