import { provideRouter, RouterConfig } from '@angular/router';

import { AuthRoutes }     from './components/auth/auth.routes';
import { GroupsRoutes }   from './components/groups/group.routes';
import { HomeRoutes }     from './components/home/home.routes';
import { PagesRoutes }    from './components/pages/pages.routes';
import { ProfilesRoutes } from './components/profiles/profiles.routes';
import { SearchRoutes }   from './components/search/search.routes';

import { authProvider } from './shared/loggedinguard'

const routes: RouterConfig = [
  ...AuthRoutes,
  ...GroupsRoutes,
  ...HomeRoutes,
  ...PagesRoutes,
  ...ProfilesRoutes,
  ...SearchRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes), [authProvider]
];