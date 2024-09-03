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
        console.log(email,password)
        this.router.navigate(['login']);
      } else {
        console.log('Form is invalid');
      }
    }
    showPhonecomponent(){
      this.router.navigate(["employee-dashboard"])
    }
  }