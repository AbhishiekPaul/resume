import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective-component',
  templateUrl: './objective-component.component.html',
  styleUrls: ['./objective-component.component.scss'],
})
export class ObjectiveComponentComponent  implements OnInit {

  displayedText: string = ''; // Text to display in the top div
  clickedParagraphId: string = ''; // ID of the clicked paragraph
  backgroundColor: string = ' var(--Blue, #053750)';
  showCopyText: string = ''; // ID of the paragraph to show the "Copy" text

  constructor() { }

  ngOnInit() {}

  // Function to update the text, background color, and show "Copy" text
  updateDisplayedText(event: MouseEvent, paragraphId: string) {
    const target = event.currentTarget as HTMLElement;
    const textContent = target.querySelector('ion-text')?.innerText || '';

    // Update the displayed text and clicked paragraph ID
    this.displayedText = textContent;
    this.clickedParagraphId = paragraphId;
    this.showCopyText = paragraphId;

    // Hide the "Copy" text after a delay
    setTimeout(() => {
      this.showCopyText = '';
    }, 200000); // Adjust delay as needed
  }
}
