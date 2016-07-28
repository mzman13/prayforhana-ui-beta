import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { PageService }     from '../../shared/services/page.service';
import { UserService }     from '../../shared/services/user.service';


@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class SearchComponent implements OnInit {

  users;
  pages;
  msg;

  constructor(private userService: UserService,
              private pageService: PageService,
              private router: Router) {}

  ngOnInit() {
  }

  submit(input) {
    if (input.option == "users") {
      this.userService
          .searchUsers(input.query)
          .subscribe(users => {
            this.pages = [];
            this.users = users;
            this.msg = ""
            if (users.length < 1) {
              this.msg = "No users found.";
            }
          })  
    } else {
      this.pageService
          .searchPages(input.query)
          .subscribe(pages => {
            this.users = [];
            this.pages = pages;
            this.msg = ""
            if (pages.length < 1) {
              this.msg = "No pages found.";
            }
          })    
    }
  }

  viewUser(user_id) { 
      this.router.navigate(['/users', user_id]);
  }

  viewPage(page_id) { 
      this.router.navigate(['/pages', page_id]);
  }

}