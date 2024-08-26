  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { ServiceService } from '../service.service';

  @Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss'],
  })
  export class CreateAccountComponent  implements OnInit {
    // createAccountForm!: FormGroup;

    // constructor(
    //   private fb: FormBuilder,
    //   private service: ServiceService,
    //   private router: Router
    // ) {}

    // ngOnInit() {
    //   this.createAccountForm = this.fb.group({
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(6)]],
    //     confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
    //   });
    // }

    // matchPassword(control: any) {
    //   const password = this.createAccountForm?.get('password')?.value;
    //   const confirmPassword = control.value;
    //   return password === confirmPassword ? null : { passwordMismatch: true };
    // }

    // onSubmit() {
    //   console.log(this.createAccountForm)
    //   if (this.createAccountForm.valid) {
    //     const { email, password } = this.createAccountForm.value;
    //     this.service.verifyEmail(email, password).subscribe(
    //       (response: any) => {
    //         console.log(response,"create-account component")
    //         console.log('Account created successfully:', response);
    //         this.router.navigate(['login']); // Navigate to the login page
    //       },
    //       (error: any) => {
    //         if (error.status === 409) {
    //           console.error('User with this email already exists:', error);
    //           alert('User with this email already exists. Please use a different email.');
    //         } else {
    //           console.error('Error creating account:', error);
    //         }
    //       }
    //     );
    //   } else {
    //     console.log('Form is invalid');
    //   }
    // }
    createAccountForm!: FormGroup;

    constructor(
      private fb: FormBuilder,
      private service: ServiceService,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.createAccountForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      });
    }
  
    matchPassword(control: any) {
      const password = this.createAccountForm?.get('password')?.value;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    }
  
    onSubmit() {
      if (this.createAccountForm.valid) {
        const { email, password } = this.createAccountForm.value;
        this.service.setEmail(email);
  
        // Send OTP to the email
        this.service.sendEmailOtp(email).subscribe(
          (response: any) => {
            console.log('OTP sent successfully to email:', response);
            // Navigate to OTP verification page or display a message
            this.router.navigate(['otp-verification']);
          },
          (error: any) => {
            console.error('Error sending OTP:', error);
            alert('Failed to send OTP. Please try again.');
          }
        );
      } else {
        console.log('Form is invalid');
      }
    }  
  }
