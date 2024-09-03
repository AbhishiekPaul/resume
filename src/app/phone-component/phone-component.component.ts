import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { ServiceService } from '../service.service';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { SignInWithApple, SignInWithAppleOptions, SignInWithAppleResponse } from '@capacitor-community/apple-sign-in';
import { async } from 'rxjs';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
// import { FacebookLoginProvider } from '@abacritt/angularx-social-login';

interface Window {
  fbAsyncInit: any;
  FB: any;
}
@Component({
  selector: 'app-phone-component',
  templateUrl: './phone-component.component.html',
  styleUrls: ['./phone-component.component.scss'],
})
export class PhoneComponentComponent implements OnInit {

  phoneForm!: FormGroup;
  emailForm!: FormGroup;
  selectedCountryCode: any = '+91';
  showPhoneComponent: any = true;
  showEmailComponent: any = false;
  selectedSegment: any = 'custom';
  phoneImage: string = 'assets/icon/icon_private_tours_phone.png'; 
  emailImage1: string = 'assets/icon/icon_private_tours_email1.png'; 
  emailImage2: string = 'assets/icon/icon_private_tours_email2.png'; 
  socialAuthService: any;
  

  constructor(public router: Router, private fb: FormBuilder, private service: ServiceService) {}

  ngOnInit() { 
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required, this.validatePhoneNumber]],
    });

    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // otp: ['', [Validators.required]] // Added OTP field for email verification
    });
    this.emailForm.patchValue({
      email: this.service.getEmail(),
    });
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
    if (this.selectedSegment === 'custom') {
      this.PhoneComponent();
    } else {
      this.EmailComponent();
    }
  }

  PhoneComponent() {
    this.showPhoneComponent = true;
    this.showEmailComponent = false;
  }

  EmailComponent() {
    this.showEmailComponent = true;
    this.showPhoneComponent = false;
  }

  otpcomponent() {}

  emailVarification() {
    this.router.navigate(["Email-varification"]);
  }

  CreateAccount() {
    this.router.navigate(["Create-Account"]);
  }

  forgotPassword() {
    this.router.navigate(["Forgot-password"]);
  }

  onPhoneSubmit() {
    if (this.phoneForm.valid) {
      const phone = this.selectedCountryCode + this.phoneForm.value.phone;
      console.log('Formatted Phone Number:', phone); // Log to check formatting
      
      this.service.setPhoneNumber(phone); // Store the phone number in the service
  
      this.service.sendOtp(phone).subscribe(
        (response: any) => {
          console.log('OTP sent successfully:', response);
  
          // Navigate to the OTP component only after OTP is sent successfully
          this.router.navigate(['otp-component']);
        },
        (error: any) => {
          console.error('Error sending OTP:', error);
          alert('Failed to send OTP. Please try again.');
        }
      );
    } else {
      console.log('Phone form is invalid');
    }
  }
  
  onEmailVerification() {
    if (this.emailForm.valid) {
      const { email, password } = this.emailForm.value;
      this.service.verifyEmail(email, password).subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          this.router.navigate(['dashboard']); // Navigate to the dashboard or home page after successful login
        },
        (error: any) => {
          console.error('Error during login:', error);
          alert('Login failed. Please check your email and password.');
        }
      );
    } else {
      console.log('Email form is invalid');
    }
  }
  
  validatePhoneNumber(control: any) {
    const phoneNumberPattern = /^[0-9]{10}$/;
    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  } 
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(() => {
      console.log('Facebook sign-in successful');
    }).catch((error:any) => {
      console.error('Facebook sign-in error:', error);
    });
  }
  
  async signInWithGoogle() {
    try {
      const user = await GoogleAuth.signIn();
      console.log('Google sign-in successful:', user);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  }
   async appleLogin() {
    try {
      const options: SignInWithAppleOptions = {
        clientId: 'com.example.yourapp',
        redirectURI: 'https://your.redirect.uri/callback',
        scopes: 'name email',
      };
  
      // Initiate Apple Sign-In
      const response: any = await SignInWithApple.authorize(options);
  
      // Inspect response object
      console.log('Apple Sign-In Response:', response);
  
      const appleToken = response.token || response.authorization?.id_token;
      
      if (appleToken) {
        console.log('Apple Token:', appleToken);
  
        this.service.loginWithApple(appleToken).subscribe(
          response => {
            console.log('Apple Login Success:', response);
            this.router.navigate(['dashboard']);
          },
          error => {
            console.error('Apple Login Error:', error);
            alert('Apple login failed. Please try again.');
          }
        );
      } else {
        console.error('Apple Login Error: No token received');
      }
    } catch (error) {
      console.error('Apple Sign-In Error:', error);
      alert('Apple login failed. Please try again.');
    }
  }
  }
