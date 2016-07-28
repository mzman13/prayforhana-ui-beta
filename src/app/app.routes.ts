import { provideRouter, RouterConfig } from '@angular/router';

import { AuthRoutes }     from './components/auth/auth.routes';
import { HomeRoutes }     from './components/home/home.routes';
import { PagesRoutes }    from './components/pages/pages.routes';
import { ProfilesRoutes } from './components/profiles/profiles.routes';
import { SearchRoutes }   from './components/search/search.routes';


const routes: RouterConfig = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...PagesRoutes,
  ...ProfilesRoutes,
  ...SearchRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];