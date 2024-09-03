import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  step: number = 0;

  steps = [
    { icon: 'person-circle', title: 'About Me', progress: 20 },
    { icon: 'home', title: 'Objective', progress: 30 },
    { icon: 'star', title: 'Education', progress: 50 },
    { icon: 'settings', title: 'skills', progress: 70 },
    { icon: 'help-circle', title: 'project', progress: 90 },
  ];

  progress: number = 0;

  onStepChange(event: any) {
    
    this.step = event?.detail?.value || event; 
    console.log('Current Step:', this.step);
  } 
  
  increaseProgress(value: number) {
    this.progress = Math.min(this.progress + value, 100);
    console.log('Increased Progress by:', value, 'New Progress:', this.progress);
  }

}
