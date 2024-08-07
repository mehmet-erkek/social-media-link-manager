import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountButtonComponent } from './add-account-button.component';

describe('AddAccountButtonComponent', () => {
  let component: AddAccountButtonComponent;
  let fixture: ComponentFixture<AddAccountButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAccountButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAccountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
