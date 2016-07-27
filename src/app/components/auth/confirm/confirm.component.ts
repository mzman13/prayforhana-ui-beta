import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit }      from '@angular/core';

import { AuthService }      from '../../../shared/services/auth.service';
import { NavbarComponent }  from '../../../shared/navbar/navbar.component';


@Component({
  moduleId: module.id,
  selector: 'app-confirm',
  templateUrl: 'confirm.component.html',
  styleUrls: ['confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private authService: AuthService, 
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.confirm();
  }

  confirm() {
    this.route.params
      .map(params => params['token'])
      .subscribe((id) => {
        this.authService
            .confirm(id)
            .subscribe(res => { 
              if (res.message == "success") {
                localStorage.setItem('auth_token', res.token);
              } else {
                this.router.navigate(['/login']);
              }
            });
      });
  }

}
