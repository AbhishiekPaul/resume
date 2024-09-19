import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://your-api-endpoint.com/submit'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Method to submit the form data
  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Error handling method
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
