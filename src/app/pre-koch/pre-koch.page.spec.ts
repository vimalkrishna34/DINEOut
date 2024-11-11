import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreKochPage } from './pre-koch.page';

describe('PreKochPage', () => {
  let component: PreKochPage;
  let fixture: ComponentFixture<PreKochPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreKochPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
