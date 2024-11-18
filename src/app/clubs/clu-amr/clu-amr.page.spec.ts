import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CluAmrPage } from './clu-amr.page';

describe('CluAmrPage', () => {
  let component: CluAmrPage;
  let fixture: ComponentFixture<CluAmrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CluAmrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
