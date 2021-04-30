import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFirstTimeChangePasswordComponent } from './employee-first-time-change-password.component';

describe('EmployeeFirstTimeChangePasswordComponent', () => {
  let component: EmployeeFirstTimeChangePasswordComponent;
  let fixture: ComponentFixture<EmployeeFirstTimeChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFirstTimeChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFirstTimeChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
