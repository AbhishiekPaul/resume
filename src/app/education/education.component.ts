import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  isSchoolOpen = true; 
  isInterOpen=false;
  isDegreeOpen=false;
  isPgMTECH=false;

  toggleEducation() {
    this.isSchoolOpen = !this.isSchoolOpen; 
    
  }
  toggleInter(){
      this.isInterOpen=!this.isInterOpen
  }
  toggleDegreee(){
    this.isDegreeOpen=!this.isDegreeOpen
  }
  togglePgMtech(){
    this.isPgMTECH=!this.isPgMTECH
  }
}
