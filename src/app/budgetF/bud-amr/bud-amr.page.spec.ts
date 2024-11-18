import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudAmrPage } from './bud-amr.page';

describe('BudAmrPage', () => {
  let component: BudAmrPage;
  let fixture: ComponentFixture<BudAmrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudAmrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
