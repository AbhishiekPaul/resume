import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

    constructor() { }
    swiperModules = [IonicSlides];
    ngOnInit() {}
    @ViewChild('slider', { static: true }) readonly slider?: ElementRef<SwiperContainer>;
    ngOnChanges(changes: any) {
      
    }
}
