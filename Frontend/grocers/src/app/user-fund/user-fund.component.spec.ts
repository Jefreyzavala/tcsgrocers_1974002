import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFundComponent } from './user-fund.component';

describe('UserFundComponent', () => {
  let component: UserFundComponent;
  let fixture: ComponentFixture<UserFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
