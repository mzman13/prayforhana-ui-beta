import { provideRouter, RouterConfig } from '@angular/router';

import { AuthRoutes }       from './components/auth/auth.routes';
import { HomeRoutes }       from './components/home/home.routes';


const routes: RouterConfig = [
  ...AuthRoutes,
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];