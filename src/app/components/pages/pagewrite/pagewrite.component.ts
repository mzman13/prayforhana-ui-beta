import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PostService }     from '../../../shared/services/post.service';

@Component({
  moduleId: module.id,
  selector: 'app-pagewrite',
  templateUrl: 'pagewrite.component.html',
  styleUrls: ['pagewrite.component.css'],
  directives: [NavbarComponent]
})
export class PagewriteComponent implements OnInit {

  page_id;

  constructor(private postService: PostService, 
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['page_id'])
      .subscribe((page_id) => {
        console.log(page_id);
        this.page_id = page_id;
      });

  }

  submit(input) {
    this.postService
        .createPagePost(input, this.page_id)
        .subscribe(res => {
          this.router.navigate(['/pages', this.page_id]);
        })
  }

  goBack() {
    this.router.navigate(['/pages']);
  }

}