import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CluKochPage } from './clu-koch.page';

describe('CluKochPage', () => {
  let component: CluKochPage;
  let fixture: ComponentFixture<CluKochPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CluKochPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
