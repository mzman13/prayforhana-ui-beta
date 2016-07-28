import { Component, OnInit }         from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';  

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { UserService }     from '../../../shared/services/user.service';


@Component({
  moduleId: module.id,
  selector: 'app-profiles',
  templateUrl: 'profiles.component.html',
  styleUrls: ['profiles.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class ProfilesComponent implements OnInit {

  profiles;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.userService
        .getUsers()
        .subscribe(profiles => {
          this.profiles = profiles; 
        })
  }

  viewProfile(user_id) {
    this.router.navigate(['/profiles', user_id]);
  }

}