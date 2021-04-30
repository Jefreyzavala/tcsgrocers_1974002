import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckoutItemComponent } from './user-checkout-item.component';

describe('UserCheckoutItemComponent', () => {
  let component: UserCheckoutItemComponent;
  let fixture: ComponentFixture<UserCheckoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCheckoutItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheckoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
