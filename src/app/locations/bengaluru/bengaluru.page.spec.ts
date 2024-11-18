import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BengaluruPage } from './bengaluru.page';

describe('BengaluruPage', () => {
  let component: BengaluruPage;
  let fixture: ComponentFixture<BengaluruPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BengaluruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
