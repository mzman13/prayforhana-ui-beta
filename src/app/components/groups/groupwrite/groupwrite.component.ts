import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PostService }    from '../../../shared/services/post.service';


@Component({
  moduleId: module.id,
  selector: 'app-groupwrite',
  templateUrl: 'groupwrite.component.html',
  styleUrls: ['groupwrite.component.css'],
  directives: [NavbarComponent]
})
export class GroupwriteComponent implements OnInit {

  constructor(private postService: PostService, 
              private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/groups']);
  }

}