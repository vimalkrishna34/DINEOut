import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmritsarPage } from './amritsar.page';

describe('AmritsarPage', () => {
  let component: AmritsarPage;
  let fixture: ComponentFixture<AmritsarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmritsarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
