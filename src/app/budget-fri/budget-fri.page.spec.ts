import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetFriPage } from './budget-fri.page';

describe('BudgetFriPage', () => {
  let component: BudgetFriPage;
  let fixture: ComponentFixture<BudgetFriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
