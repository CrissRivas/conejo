import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination , Mousewheel} from 'swiper';
import { SwiperComponent } from 'swiper/angular';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
public directionSlider:'horizontal'|'vertical' = 'horizontal';
public mousewheelControl:boolean=true;
  constructor() { }

  ngOnInit(): void {
    Swiper.use([Pagination,Navigation]);

    this.verticalSlide();

  }

verticalSlide():void{
  if(window.innerWidth > 801){
this.directionSlider= 'vertical';
Swiper.use([Mousewheel])
  }
}

}
