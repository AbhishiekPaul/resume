import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.scss'],
})
export class StepperComponentComponent  implements OnInit {
  progress: number = 0;
  activeStepIndex: number = 0;
  stepIncrement: number = 10;
  rangeValue = 0;

  // Define steps with corresponding component names
  steps = [
    {
      name: 'Aboutme',
      defaultIcon: ' assets/icon/person with ox (1).png',
      activeIcon: 'assets/icon/person with ox (2).png ',
      isActive: false,
    },
    {
      name: 'objective',
      activeIcon: ' assets/icon/arrow-box1 (2).png',
      defaultIcon: 'assets/icon/arrow-box1 (1).png ',
      
      isActive: false,
    },
    {
      name: 'education',
      defaultIcon: ' assets/icon/eductaion-box.png',
      activeIcon: 'assets/icon/eudcation-box1.png',
      isActive: false,
    }, {
      name: 'skills',
      defaultIcon: 'assets/icon/skills-box.png',
      activeIcon: 'assets/icon/skills=box1.png',
      isActive: false,
    },
    {
      name: 'projects',
      defaultIcon: ' assets/icon/certification-box2.png',
      activeIcon: 'assets/icon/projects.png',
      isActive: false,
    },
    {
      name: 'experience',
      defaultIcon: 'assets/icon/bag-box.png',
      activeIcon: 'assets/icon/bag-box1.png',
      isActive: false,
    },
    {
      name: 'Certifications',
      defaultIcon: 'assets/icon/cetification-box.png',
      activeIcon: 'assets/icon/certifications.png',
      isActive: false,
    },
    {
      name: 'Languages',
      defaultIcon: ' assets/icon/earth-symbol.png',
      activeIcon: 'assets/icon/earth-symbol1.png',
      isActive: false,
    },
    {
      name: 'Social',
      defaultIcon: ' assets/icon/inrests-box.png ',
      activeIcon: 'assets/icon/intrest-box-1.png',
   
      isActive: false,
    },
    {
      name: 'Interests',
      defaultIcon: 'assets/icon/languages.png',
      activeIcon: 'assets/icon/languages2.png',
      isActive: false,
    },  
    
  ];
 
  // Visibility state object for components
  componentsVisibility: { [key: string]: boolean } = {
    Aboutme: false,
    objective: false,
    education: false,
    skills: false,
    projects: false,
    experience: false,
    Certifications: false,
    Languages : false,
    Social:false,
    Interests:false
  };

  constructor() {}

  ngOnInit(): void {
    this.showComponent('Aboutme'); // Display the first component initially
  }

  // Method to toggle the active step and display the corresponding component
  toggleStep(step: any) {
    // Set all steps to inactive
    this.steps.forEach((s) => (s.isActive = false));
    // Activate the clicked step
    step.isActive = true;
    this.activeStepIndex = this.steps.indexOf(step);
    // Show the corresponding component
    this.showComponent(step.name);
    this.updateProgress();
  }

  // Show the specified component and hide others
  showComponent(componentName: string) {
    // Reset visibility for all components
    for (let key in this.componentsVisibility) {
      this.componentsVisibility[key] = false;
    }
    // Show the selected component
    if (this.componentsVisibility.hasOwnProperty(componentName)) {
      this.componentsVisibility[componentName] = true;
    }
  }

  // Updates the progress based on the active step
  updateProgress() {
    this.progress = (this.activeStepIndex + 1) * this.stepIncrement;
    if (this.progress > 100) {
      this.progress = 100;
    }
  }

  // Update range display value
  updateDisplay(event: any) {
    this.rangeValue = event.detail.value;
    console.log('Range changed:', this.rangeValue);
  }


}
