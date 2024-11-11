import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudDelPage } from './bud-del.page';

describe('BudDelPage', () => {
  let component: BudDelPage;
  let fixture: ComponentFixture<BudDelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudDelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
