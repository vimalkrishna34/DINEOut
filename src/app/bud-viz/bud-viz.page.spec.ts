import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudVizPage } from './bud-viz.page';

describe('BudVizPage', () => {
  let component: BudVizPage;
  let fixture: ComponentFixture<BudVizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BudVizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
