import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {

  constructor() { }
  buttonTexts: string[] = ['UI Design', 'Prototype', 'Sketching', 'User Experience', 'User Research'];
  ngOnInit() {}


}
