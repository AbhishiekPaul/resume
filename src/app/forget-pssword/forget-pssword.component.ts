import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pssword',
  templateUrl: './forget-pssword.component.html',
  styleUrls: ['./forget-pssword.component.scss'],
})
export class ForgetPsswordComponent  implements OnInit {

  constructor(public router:Router) { }
  forgotPassword(){
    this.router.navigate(["Email-varification"])
  }
  ngOnInit() {}

}
