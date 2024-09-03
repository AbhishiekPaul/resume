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
  
    AboutmeComponent: any = true;
    eductaionComponent: any = false;
    objectiveComponent: any = false;
    skillsComponent: any = false;
    projectsComponent: any = false;

    constructor() {
      
    }

    ngOnInit(): void {
      this.updateProgress();
    }
    updateProgress() {
      this.progress = (this.activeStepIndex + 1) * this.stepIncrement;
      if (this.progress > 100) {
        this.progress = 100;
      }
    }

    // Show different components based on the stepper button clicked
    showAboutmeComponent() {
      this.resetComponents();
    this.AboutmeComponent = true;
    this.activeStepIndex = 0;
    this.updateProgress();
    }

    showObjectiveComponent() {
      this.resetComponents();
    this.objectiveComponent = true;
    this.activeStepIndex = 1;
    this.updateProgress();
    }

    showEducationComponent() {
      this.resetComponents();
      this.eductaionComponent = true;
      this.activeStepIndex = 2;
      this.updateProgress();
    }

    showSkillsComponent() {
      this.resetComponents();
    this.skillsComponent = true;
    this.activeStepIndex = 3;
    this.updateProgress();
    }

    showProjectComponent() {
      this.resetComponents();
      this.projectsComponent = true;
      this.activeStepIndex = 4;
    }

    // Function to reset the components visibility
    resetComponents() {
      this.AboutmeComponent = false;
      this.objectiveComponent = false;
      this.eductaionComponent = false;
      this.skillsComponent = false;
      this.projectsComponent = false;
    }

    increaseProgress(step: any, index: number) {
      // Ensure progress is within 0 - 100 range
      this.progress = Math.min(this.progress + step.progress, 100);
      this.activeStepIndex = index;
      console.log('Increased Progress:', this.progress);
    }
  }
