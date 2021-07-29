import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketChangeComponent } from './market-change.component';

describe('MarketChangeComponent', () => {
  let component: MarketChangeComponent;
  let fixture: ComponentFixture<MarketChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
