import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.scss'],
})
export class EmailComponentComponent  implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {}
  emailVarification(){
    
  }
  
}
