import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreDelPage } from './pre-del.page';

describe('PreDelPage', () => {
  let component: PreDelPage;
  let fixture: ComponentFixture<PreDelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
