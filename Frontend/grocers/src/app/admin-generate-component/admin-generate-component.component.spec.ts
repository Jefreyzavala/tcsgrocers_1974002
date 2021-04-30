import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateComponentComponent } from './admin-generate-component.component';

describe('AdminGenerateComponentComponent', () => {
  let component: AdminGenerateComponentComponent;
  let fixture: ComponentFixture<AdminGenerateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenerateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
