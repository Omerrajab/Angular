// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditUserComponent } from './add-edit-user.component';

describe('AddEditUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture<AddEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUserComponent],
      imports: [ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(AddEditUserComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with controls', () => {
    expect(component.myForm.get('name')).toBeDefined();
  });

  it('should mark the form as invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('should mark the name control as invalid when empty', () => {
    const nameControl = component.myForm.get('name');
    expect(nameControl).toBeDefined(); // Check if the control exists
    if (nameControl) {
      expect(nameControl.valid).toBeFalsy();
    }
  });
  it('should mark the name control as invalid when empty', () => {
    const nameControl = component.myForm.get('name')!;
    expect(nameControl.valid).toBeFalsy();
  });

  // it('should disable the submit button when the form is invalid', () => {
  //   const submitButton = fixture.nativeElement.querySelector('button');
  //   expect(submitButton.disabled).toBeTruthy();
  // });


  it('should disable the submit button when the form is invalid', () => {
    const submitButton = fixture.nativeElement.querySelector('button');
    const nameControl = component.myForm.get('name');
    expect(nameControl).toBeDefined();
    if (nameControl) {
      nameControl.setValue('');
    }
    // Set the form control to an invalid state

    // Trigger change detection
    fixture.detectChanges();
    if (nameControl)
      expect(nameControl.valid).toBeFalsy(); // Verify the control is invalid
    expect(submitButton.disabled).toBeTruthy(); // Verify the button is disabled
  });

  // Add more test cases as needed for your specific form logic
});
