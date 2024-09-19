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
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
// import { StepperCreateResumeComponent } from './stepper-create-resume/stepper-create-resume.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ObjectiveComponentComponent } from './objective-component/objective-component.component';
  const routes: Routes = [
    // { path: '', component: ResumeLoginComponent } ,
    //   { path: 'employee-dashboard', component: PhoneComponentComponent }
   
    // ,{path:"Email-Component",component:EmailComponentComponent},
    // {path:"otp-component",component:OtpComponent},
    // {path:"Email-varification",component:EmailVerificationComponent},
    // {path:"Create-Account",component:CreateAccountComponent},
    // {path:"dashboard",component:HomeComponent},
    // {path:"Forgot-password",component:ForgetPsswordComponent},
    // { path: '**', redirectTo: '' },
  //   { path: '', redirectTo: '/stepper', pathMatch: 'full' },
  // { path: 'stepper', component: StepperCreateResumeComponent },
  // { path: 'about-me', component: AboutmeComponent },
  // { path: 'objective', component: ObjectiveComponentComponent },
  // { path: 'education', component: EducationComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: '**', redirectTo: '/stepper' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}