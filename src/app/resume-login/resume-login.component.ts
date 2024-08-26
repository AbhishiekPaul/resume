import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-login',
  templateUrl: './resume-login.component.html',
  styleUrls: ['./resume-login.component.scss'],
})
export class ResumeLoginComponent  implements OnInit {
  pageLoads:any=true;
  constructor(private router: Router) {}

  ngOnInit() {}


  loginAsEmployee() {
    
    this.router.navigate(['employee-dashboard']); 
    this.pageLoads=false;
    console.log('Logging in as Employee');
    
  }

  

}
