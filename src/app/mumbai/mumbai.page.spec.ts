import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MumbaiPage } from './mumbai.page';

describe('MumbaiPage', () => {
  let component: MumbaiPage;
  let fixture: ComponentFixture<MumbaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
