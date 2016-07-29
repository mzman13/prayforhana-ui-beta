import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { GroupService }    from '../../../shared/services/group.service';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class GroupsComponent implements OnInit {

  adminGroups;
  memberGroups;

  constructor(private groupService: GroupService,
              private router: Router) {}

  ngOnInit() {
    this.adminGroups = [];
    this.memberGroups = [];
    this.getGroups();
  }

  getGroups() {
    this.groupService
        .getGroups()
        .subscribe(groups => {
          this.adminGroups = groups.adminGroups;
          this.memberGroups = groups.memberGroups;
        })
  }

  viewGroup(group_id) {
    this.router.navigate(['/groups', group_id]);
  }

}