import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title;
  menu_show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toogleMenu() {
    this.menu_show = !this.menu_show;
  }

}
