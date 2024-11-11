import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CluMumPage } from './clu-mum.page';

describe('CluMumPage', () => {
  let component: CluMumPage;
  let fixture: ComponentFixture<CluMumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CluMumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
