import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  careerPurpose:any=[{name:"Accounting & Finance"},{name:"Administrative"},{name:"Business & Management"},{name:"Developer"},{name:"Customer Service & Operations"},{name:"Sales"},{name:"Dentist"},{name:"Engineering"},{name:"Marketing"},{name:"IT Software"},{name:"HR & Recruitment "}]

}
