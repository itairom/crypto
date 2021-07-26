import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPreviewComponent } from './currency-preview.component';

describe('CurrencyPreviewComponent', () => {
  let component: CurrencyPreviewComponent;
  let fixture: ComponentFixture<CurrencyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
