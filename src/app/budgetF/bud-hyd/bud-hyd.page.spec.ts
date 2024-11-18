import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudHydPage } from './bud-hyd.page';

describe('BudHydPage', () => {
  let component: BudHydPage;
  let fixture: ComponentFixture<BudHydPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudHydPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
