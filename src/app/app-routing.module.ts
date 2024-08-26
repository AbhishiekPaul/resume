  import { createComponent, NgModule } from '@angular/core';
  import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PhoneComponentComponent } from './phone-component/phone-component.component';
import { ResumeLoginComponent } from './resume-login/resume-login.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { OtpComponent } from './otp/otp.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgetPsswordComponent } from './forget-pssword/forget-pssword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
  const routes: Routes = [
    //   { path: 'employee-dashboard', component: PhoneComponentComponent },
    // { path: '', component: ResumeLoginComponent } // Default route
    // ,{path:"Email-Component",component:EmailComponentComponent},
    // {path:"otp-component",component:OtpComponent},
    // {path:"Email-varification",component:EmailVerificationComponent},
    // {path:"Create-Account",component:CreateAccountComponent},
    // {path:"dashboard",component:DashboardComponent},
    // {path:"Forgot-password",component:ForgetPsswordComponent},
    // { path: '**', redirectTo: '' },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}