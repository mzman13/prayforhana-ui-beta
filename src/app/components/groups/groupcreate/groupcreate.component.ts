import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { GroupService }    from '../../../shared/services/group.service';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'app-groupcreate',
  templateUrl: 'groupcreate.component.html',
  styleUrls: ['groupcreate.component.css'],
  directives: [NavbarComponent]
})
export class GroupcreateComponent implements OnInit {

  constructor(private groupService: GroupService, 
              private router: Router) {}

  ngOnInit() {}

  submit(input) {
    this.groupService
        .createGroup(input)
        .subscribe(group => {
          this.router.navigate(['/groups', group._id]);
        })
  }

}