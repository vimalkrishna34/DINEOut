import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiRestPage } from './premi-rest.page';

describe('PremiRestPage', () => {
  let component: PremiRestPage;
  let fixture: ComponentFixture<PremiRestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
