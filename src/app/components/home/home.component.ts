import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../../shared/navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [NavbarComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
