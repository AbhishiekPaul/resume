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
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { Loader } from '@googlemaps/js-api-loader';
import { StepperCreateResumeComponent } from './stepper-create-resume/stepper-create-resume.component';
import { ObjectiveComponentComponent } from './objective-component/objective-component.component';
import { EducationComponent } from './education/education.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


@NgModule({
  declarations: [AppComponent,PhoneComponentComponent,ResumeLoginComponent,EmailComponentComponent,OtpComponent,EmailVerificationComponent,CreateAccountComponent,ForgetPsswordComponent ,DashboardComponent,GetStartedComponent,HomeComponent,StepperCreateResumeComponent,ObjectiveComponentComponent,EducationComponent,AboutmeComponent],
  imports: [BrowserModule,IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,CommonModule,FormsModule, HttpClientModule,SocialLoginModule,GoogleSigninButtonModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '212014692336-igdmp63h8n356i2estm61la41026qp1e.apps.googleusercontent.com',
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1783996658754507'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyACjG5zi1g9ldzesS1I_ZOtCSdflvNFc9k',
        libraries: ['places'],
      }),
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
