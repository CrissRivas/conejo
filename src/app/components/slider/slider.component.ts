import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination,Autoplay } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swiper.use([Pagination,Autoplay]);
  }

}
