import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  private apiUrl = 'http://43.204.67.249:3080/ps/v1/user'; 
  private phoneNumber: string = '';
  private otp: string = '';
  private email: string = '';

  constructor(private http: HttpClient) {}
  setPhoneNumber(phone: string) {
    this.phoneNumber = phone;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setOtp(otp: any) {
    this.otp = otp;
  }

  getOtp(): any {
    return this.otp;
  }
  setEmail(email: string): void {
    this.email = email;
  }

  verifyEmail(email: string, password: string): Observable<any> {
    const payload = {
      email: email,
      password: password,
      roles: ["user"],
      avatar: "name.jpg"
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/email`, payload, { headers });
  }
  sendEmailOtp(email: string): Observable<any> {
    const payload = {
    email: email,
    // phone: "+098726374829",
  };

  return this.http.post(`${this.apiUrl}/send-otp`, payload);
  }

  sendOtp(phone: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-otp`, { phone });
  }
 

  verifyPhoneNumberWithOtp(): Observable<any> {
    const payload = {
      phone: "+919347252317",
      code: this.getOtp(),
      loginWithOtp: true,
      isVerified: true,
    };

    return this.http.post(`${this.apiUrl}/verify-otp`, payload);
  }
 

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.apiUrl}/login`, payload);
  }
}
