import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation } from 'swiper';


@Component({
  selector: 'app-ui-slider',
  templateUrl: './ui-slider.component.html',
  styleUrls: ['./ui-slider.component.scss']
})
export class UiSliderComponent implements OnInit {

  public conejoButton:boolean=false;
  public Gubs:boolean=false;
  public weed:boolean=false;
  public reto:boolean=false;

  constructor() { }

  ngOnInit(): void {
Swiper.use([Navigation]);
  }


  tgglCnjo():void{
    this.conejoButton=!this.conejoButton;
  }
  tgglGubs():void{
    this.Gubs=!this.Gubs;
  }
  tgglWeed():void{
    this.weed=!this.weed;
  }
  tgglReto():void{
    this.reto=!this.reto;
  }
}
