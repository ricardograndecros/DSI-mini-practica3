import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPickerComponent } from './community-picker.component';

describe('CommunityPickerComponent', () => {
  let component: CommunityPickerComponent;
  let fixture: ComponentFixture<CommunityPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
