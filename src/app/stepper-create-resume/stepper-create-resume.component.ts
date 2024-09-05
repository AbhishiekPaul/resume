  import { Component, OnInit } from '@angular/core';
  import { NavigationEnd, Router } from '@angular/router';

  @Component({
    selector: 'app-stepper-create-resume',
    templateUrl: './stepper-create-resume.component.html',
    styleUrls: ['./stepper-create-resume.component.scss'],
  })
  export class StepperCreateResumeComponent  implements OnInit {
    progress: number = 0;
    activeStepIndex: number = 0;
    maxSteps: number = 5; // Total number of steps
    stepIncrement: number = 100 / this.maxSteps; // Percentage increment per step
  
    // Object to manage component visibility
    componentsVisibility: { [key: string]: boolean } = {
      Aboutme: true,
      objective: false,
      education: false,
      skills: false,
      projects: false,
      experience: false,
      marks: false,
      socialMedia: false,
    };
  
    rangeValue = 0; // Initial value of the range slider
  
    constructor() {}
  
    ngOnInit(): void {
      this.updateProgress();
    }
  
    // Update progress based on the active step index
    updateProgress() {
      this.progress = (this.activeStepIndex + 1) * this.stepIncrement;
      if (this.progress > 100) {
        this.progress = 100;
      }
    }
  
    // Method to show a specific component based on its name
    showComponent(componentName: string) {
      // Reset all components' visibility
      for (let key in this.componentsVisibility) {
        this.componentsVisibility[key] = false;
      }
      // Set the selected component to visible
      this.componentsVisibility[componentName] = true;
      // Update the active step index based on the component name
      this.activeStepIndex = Object.keys(this.componentsVisibility).indexOf(componentName);
      this.updateProgress();
    }
  
    // Specific methods to show each component
    showAboutme() { this.showComponent('Aboutme'); }
    showObjective() { this.showComponent('objective'); }
    showEducation() { this.showComponent('education'); }
    showSkills() { this.showComponent('skills'); }
    showProjects() { this.showComponent('projects'); }
    showExperience() { this.showComponent('experience'); }
    showMarks() { this.showComponent('marks'); }
    showSocialMedia() { this.showComponent('socialMedia'); }
  
    // Method to update the display value on range slider change
    updateDisplay(event: any): void {
      const sliderValue = event.detail.value;
      // Multiply the slider value by 20 to get the desired increment display
      this.rangeValue = sliderValue * 20;
    }
  }
