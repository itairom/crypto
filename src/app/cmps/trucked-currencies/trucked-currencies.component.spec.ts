import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckedCurrenciesComponent } from './trucked-currencies.component';

describe('TruckedCurrenciesComponent', () => {
  let component: TruckedCurrenciesComponent;
  let fixture: ComponentFixture<TruckedCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckedCurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckedCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
