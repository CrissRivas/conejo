import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public conejoButton:boolean=false;
  public Gubs:boolean=false;
  public weed:boolean=false;
  constructor() { }

  ngOnInit(): void {
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
}
