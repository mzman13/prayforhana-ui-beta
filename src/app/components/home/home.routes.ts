import { HomeComponent }    from './home.component';
import { LoggedInGuard } from '../../shared/loggedinguard';


export const HomeRoutes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  }
];