import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelhiPage } from './delhi.page';

describe('DelhiPage', () => {
  let component: DelhiPage;
  let fixture: ComponentFixture<DelhiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
