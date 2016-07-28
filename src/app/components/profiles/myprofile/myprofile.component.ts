import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PostService }     from '../../../shared/services/post.service';


@Component({
  moduleId: module.id,
  selector: 'app-myprofile',
  templateUrl: 'myprofile.component.html',
  styleUrls: ['myprofile.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class MyprofileComponent implements OnInit {

  name;
  bio;
  posts;

  constructor(private postService: PostService,
              private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService
        .getPosts()
        .subscribe(user => {
          this.name = user.name;
          this.bio = user.bio;
          this.posts = user.posts; 
        })
  }

  editPost(post_id) {
    this.router.navigate(['/edit', post_id]);
  }

  deletePost(post_id) {
    this.postService
        .deletePost(post_id)
        .subscribe(result => {
          this.getPosts();
        })  
  }

}
