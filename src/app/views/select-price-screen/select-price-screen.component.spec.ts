import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPriceScreenComponent } from './select-price-screen.component';

describe('SelectPriceScreenComponent', () => {
  let component: SelectPriceScreenComponent;
  let fixture: ComponentFixture<SelectPriceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPriceScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPriceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
