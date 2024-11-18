import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CluHydPage } from './clu-hyd.page';

describe('CluHydPage', () => {
  let component: CluHydPage;
  let fixture: ComponentFixture<CluHydPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CluHydPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
