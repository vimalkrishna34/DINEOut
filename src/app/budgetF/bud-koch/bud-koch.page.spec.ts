import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudKochPage } from './bud-koch.page';

describe('BudKochPage', () => {
  let component: BudKochPage;
  let fixture: ComponentFixture<BudKochPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudKochPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
