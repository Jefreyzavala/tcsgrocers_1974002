import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteItemComponent } from './user-delete-item.component';

describe('UserDeleteItemComponent', () => {
  let component: UserDeleteItemComponent;
  let fixture: ComponentFixture<UserDeleteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
