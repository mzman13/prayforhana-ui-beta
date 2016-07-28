import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PageService }     from '../../../shared/services/page.service';


@Component({
  moduleId: module.id,
  selector: 'app-pagecreate',
  templateUrl: 'pagecreate.component.html',
  styleUrls: ['pagecreate.component.css']
})
export class PagecreateComponent implements OnInit {

  constructor(private pageService: PageService, 
              private router: Router) {}

  ngOnInit() {}

  submit(input) {
    this.pageService
        .createPage(input)
        .subscribe(page => {
          this.router.navigate(['/pages', page._id]);
        })
  }

}