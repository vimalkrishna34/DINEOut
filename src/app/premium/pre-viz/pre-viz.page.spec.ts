import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreVizPage } from './pre-viz.page';

describe('PreVizPage', () => {
  let component: PreVizPage;
  let fixture: ComponentFixture<PreVizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreVizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
