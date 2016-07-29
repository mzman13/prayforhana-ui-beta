import { PageComponent }       from './page/page.component';
import { PagecreateComponent } from './pagecreate/pagecreate.component';
import { PagesComponent }      from './pages/pages.component';
import { PagewriteComponent }  from './pagewrite/pagewrite.component';

import { LoggedInGuard } from '../../shared/loggedinguard';


export const PagesRoutes = [
  {
    path: 'pages/:page_id',
    component: PageComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'createpage',
    component: PagecreateComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'pages',
    component: PagesComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'pages/write/:page_id',
    component: PagewriteComponent,
    canActivate: [LoggedInGuard]
  }
];