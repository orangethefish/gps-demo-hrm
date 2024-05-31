import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsManagementComponent } from './gps-management.component';

describe('GpsManagementComponent', () => {
  let component: GpsManagementComponent;
  let fixture: ComponentFixture<GpsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
