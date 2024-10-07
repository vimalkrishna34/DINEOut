import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHomePage } from './home-home.page';

describe('HomeHomePage', () => {
  let component: HomeHomePage;
  let fixture: ComponentFixture<HomeHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
