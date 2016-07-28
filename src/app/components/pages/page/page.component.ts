import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PageService }     from '../../../shared/services/page.service';


@Component({
  moduleId: module.id,
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css'],
  directives: [NavbarComponent]
})
export class PageComponent implements OnInit {

  page_id;
  name;
  description;
  posts;
  level;

  constructor(private pageService: PageService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['page_id'])
      .subscribe((page_id) => {
        this.page_id = page_id;
        this.getPage(page_id);
      });
  }

  getPage(page_id) {
    this.pageService
        .getPage(page_id)
        .subscribe(res => {
          this.level = res.level;
          this.name = res.page.name;
          this.description = res.page.description;
          this.posts = res.page.posts;
        })
  }

  writePost() {
      this.router.navigate(['/pages/write/', this.page_id]);
  }

  follow() {
    this.pageService
        .followPage(this.page_id)
        .subscribe(res => {
          this.level = res.level;
        })
  }

  unfollow() {
    this.pageService
        .unfollowPage(this.page_id)
        .subscribe(res => {
          this.level = res.level;
        })
  }

}