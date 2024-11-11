import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreAmrPage } from './pre-amr.page';

describe('PreAmrPage', () => {
  let component: PreAmrPage;
  let fixture: ComponentFixture<PreAmrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAmrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
