import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudMumPage } from './bud-mum.page';

describe('BudMumPage', () => {
  let component: BudMumPage;
  let fixture: ComponentFixture<BudMumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudMumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
