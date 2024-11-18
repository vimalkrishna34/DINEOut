import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubDelPage } from './club-del.page';

describe('ClubDelPage', () => {
  let component: ClubDelPage;
  let fixture: ComponentFixture<ClubDelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
