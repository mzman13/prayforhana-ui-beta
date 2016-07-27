import { Component, OnInit }         from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {}

  login(input) {
    this.authService
        .login(input)
        .subscribe(res => {
          localStorage.setItem('auth_token', res.token);
          this.router.navigate(['/home']);
        })
  }

  goToSignup() {
      this.router.navigate(['/signup']);
  }

}