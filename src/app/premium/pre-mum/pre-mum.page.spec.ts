import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreMumPage } from './pre-mum.page';

describe('PreMumPage', () => {
  let component: PreMumPage;
  let fixture: ComponentFixture<PreMumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreMumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
