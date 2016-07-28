import { Component, OnInit }                         from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { UserService }     from '../../../shared/services/user.service';


@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
})
export class ProfileComponent implements OnInit {

  user_id;
  level;
  name;
  bio;
  posts;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['user_id'])
      .subscribe((user_id) => {
        this.getUser(user_id);
      });
  }

  getUser(user_id) {
    this.userService
        .getUser(user_id)
        .subscribe(res => {
          this.user_id = user_id;
          this.level = res.level;
          this.name = res.profile.name;
          this.bio = res.profile.bio;
          this.posts = res.profile.posts; 
        })
  }

  follow() {
    this.userService
        .followUser(this.user_id)
        .subscribe(res => {
          if (res.message == "success") {
            this.level = "following";
          }
        })
  }

  unfollow() {
    this.userService
        .unfollowUser(this.user_id)
        .subscribe(res => {
          if (res.message == "success") {
            this.level = "notFollowing";
          }
        })
  }

}