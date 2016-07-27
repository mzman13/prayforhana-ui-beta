import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, 
              private router: Router) {}

  ngOnInit() {}

  register(input) {
    this.authService
        .register(input)
        .subscribe(res => {
          localStorage.setItem('auth_token', res.token);
          this.router.navigate(['/home']);
        })
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
