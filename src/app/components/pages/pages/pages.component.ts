import { Component, OnInit }         from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PageService }     from '../../../shared/services/page.service';


@Component({
  moduleId: module.id,
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class PagesComponent implements OnInit {

  adminPages;
  memberPages;

  constructor(private pageService: PageService,
              private router: Router) {}

  ngOnInit() {
    this.adminPages = [];
    this.memberPages = [];
    this.getPages();
  }

  getPages() {
    this.pageService
        .getPages()
        .subscribe(pages => {
          this.adminPages = pages.adminPages; 
          this.memberPages = pages.memberPages;
        })
  }

  viewPage(page_id) {
    this.router.navigate(['/pages', page_id]);
  }

}