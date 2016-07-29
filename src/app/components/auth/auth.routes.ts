import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent }   from './login/login.component';
import { SignupComponent }  from './signup/signup.component';
import { LoggedInGuard }    from '../../shared/loggedinguard';


export const AuthRoutes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'confirm/:token',
    component: ConfirmComponent
  }, {
    path: '',
    component: LoginComponent
  }
];