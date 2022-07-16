import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public activeMenu:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMnu(): void{
    this.activeMenu = !this.activeMenu;
  }
}
