import { Component, OnInit }                          from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router }  from '@angular/router';

import { GroupService }    from '../../../shared/services/group.service';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'app-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class GroupComponent implements OnInit {

  group_id;
  name;
  description;
  posts;
  level;

  constructor(private groupService: GroupService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['group_id'])
      .subscribe((group_id) => {
        this.group_id = group_id;
        this.getGroup(group_id);
      });
  }

  getGroup(group_id) {
    this.groupService
        .getGroup(group_id)
        .subscribe(res => {
          console.log(res);
          if (res.level == "notAllowed") {
            this.router.navigate(['/home']);
          }
          this.level = res.level;
          this.name = res.group.name;
          this.description = res.group.description;
          this.posts = res.group.posts;
        })
  }

  leave() {
    this.groupService
        .leaveGroup(this.group_id)
        .subscribe(res => {
          this.level = res.level;
        })
  }

}