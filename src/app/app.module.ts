import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PhoneComponentComponent } from './phone-component/phone-component.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResumeLoginComponent } from './resume-login/resume-login.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { OtpComponent } from './otp/otp.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPsswordComponent } from './forget-pssword/forget-pssword.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { SwiperModule } from 'swiper/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppComponent,PhoneComponentComponent,ResumeLoginComponent,EmailComponentComponent,OtpComponent,EmailVerificationComponent,CreateAccountComponent,ForgetPsswordComponent ,DashboardComponent,GetStartedComponent,HomeComponent],
  imports: [BrowserModule,IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,CommonModule,FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
