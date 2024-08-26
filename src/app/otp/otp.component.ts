import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})  
export class OtpComponent  implements OnInit {
  otp1: any = '';
  otp2: any = '';
  otp3: any = '';
  otp4: any = '';
  otp5: any = '';
  otp6: any = '';
 
  constructor(private routes: Router, private yourService: ServiceService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  verifyOtp() {
    // Concatenate the OTP digits
    const enteredOtp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`;

    // Check if the OTP is not empty and has the correct length
    if (enteredOtp.length !== 6) {
      alert('OTP must be 6 digits.');
      return;
    }

    // Store the OTP in the service
    this.yourService.setOtp(enteredOtp);

    // Send the OTP verification request
    this.yourService.verifyPhoneNumberWithOtp().subscribe(
      (response: any) => {
        console.log('OTP verified successfully:', response);
        this.routes.navigate(['dashboard']); // Navigate on success
      },
      (error: any) => {
        console.error('Error verifying OTP:', error);
        if (error.status === 401) {
          alert('Invalid OTP. Please check the OTP and try again.');
        } else if (error.status === 400) {
          alert('Invalid phone number format.');
        } else if (error.status === 429) {
          alert('Too many attempts. Please wait before retrying.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }}
