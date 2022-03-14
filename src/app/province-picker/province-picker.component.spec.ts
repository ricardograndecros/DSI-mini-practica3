import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincePickerComponent } from './province-picker.component';

describe('ProvincePickerComponent', () => {
  let component: ProvincePickerComponent;
  let fixture: ComponentFixture<ProvincePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvincePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
