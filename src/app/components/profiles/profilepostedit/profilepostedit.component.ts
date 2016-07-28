import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PostService }     from '../../../shared/services/post.service';


@Component({
  moduleId: module.id,
  selector: 'app-profilepostedit',
  templateUrl: 'profilepostedit.component.html',
  styleUrls: ['profilepostedit.component.css'],
  directives: [NavbarComponent]
})
export class ProfileposteditComponent implements OnInit {

  post;
  subject;
  story;
  prayer;

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['post_id'])
      .subscribe((post_id) => {
        this.postService
            .getPost(post_id)
            .subscribe(post => {
              this.post = post;
              this.subject = post.subject;
              this.story = post.story;
              this.prayer = post.prayer;
            })
      });
  }

  submit(input) {
    this.postService
        .updatePost(input, this.post._id)
        .subscribe(res => {
          this.router.navigate(['/profile/me']);
        })
  }

}