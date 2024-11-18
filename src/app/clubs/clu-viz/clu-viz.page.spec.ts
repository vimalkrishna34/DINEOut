import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CluVizPage } from './clu-viz.page';

describe('CluVizPage', () => {
  let component: CluVizPage;
  let fixture: ComponentFixture<CluVizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CluVizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
