import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KochiPage } from './kochi.page';

describe('KochiPage', () => {
  let component: KochiPage;
  let fixture: ComponentFixture<KochiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KochiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
