import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent  implements OnInit {
  profileForm!: FormGroup;
  symbolImage1: string = 'assets/icon/Group 1000010326.png'; // Initial symbol for button 1
  symbolImage2: string = 'assets/icon/Group 1000010326.png'; // Initial symbol for button 2
  symbolImage3: string = 'assets/icon/Group 1000010326.png';
  showInput1: boolean = false;
  showInput2: boolean = false;
  showInput3: boolean = false;
  birthDate: string = '';

  constructor(private fb: FormBuilder, private apiService: RegistrationService) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Example pattern for 10-digit numbers
      location: ['', Validators.required],
      jobTitles: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onInputBlur(event: any) {
    const inputValue = event.target.value;
    if (!inputValue) {
      console.log('Input exited without typing.'); // Or handle according to requirements
    }
  }
  

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value); // Print form values
      this.apiService.submitForm(this.profileForm.value).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          // Handle success response
        },
        error => {
          console.error('Error submitting form:', error);
          // Handle error response
        }
      );
    } else {
      this.profileForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  toggleSymbol(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        this.showInput1 = !this.showInput1;
        this.symbolImage1 = this.showInput1 ? 'assets/icon/worng symbol.png' : 'assets/icon/Group 1000010326.png';
        break;
      case 2:
        this.showInput2 = !this.showInput2;
        this.symbolImage2 = this.showInput2 ? 'assets/icon/worng symbol.png' : 'assets/icon/Group 1000010326.png';
        break;
      case 3:
        this.showInput3 = !this.showInput3;
        this.symbolImage3 = this.showInput3 ? 'assets/icon/worng symbol.png' : 'assets/icon/Group 1000010326.png';
        break;
      default:
        break;
    }
  }
  getButtonClass(buttonNumber: number): string {
    switch (buttonNumber) {
      case 1:
        return this.showInput1 ? 'blue-background' : 'white-background';
      case 2:
        return this.showInput2 ? 'blue-background' : 'white-background';
      case 3:
        return this.showInput3 ? 'blue-background' : 'white-background';
      default:
        return 'white-background';
    }
  }

}
