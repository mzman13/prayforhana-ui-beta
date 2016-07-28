import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PostService }     from '../../../shared/services/post.service';


@Component({
  moduleId: module.id,
  selector: 'app-profilewrite',
  templateUrl: 'profilewrite.component.html',
  styleUrls: ['profilewrite.component.css'],
  directives: [NavbarComponent]
})
export class ProfilewriteComponent implements OnInit {

  constructor(private postService: PostService, 
              private router: Router) {}

  ngOnInit() {}

  submit(input) {
    this.postService
        .createPost(input)
        .subscribe(res => {
          this.router.navigate(['/profile/me']);
        })
  }

  goBack() {
    this.router.navigate(['/profile/me']);
  }

}