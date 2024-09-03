  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { Plugins } from '@capacitor/core';

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

    getEmail(): string {
      return this.email;
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
    loginWithGoogle(token: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/google-login`, { token });
    }

    loginWithFacebook(token: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/facebook-login`, { token });
    }

    loginWithApple(token: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/apple-login`, { token });
    }}
