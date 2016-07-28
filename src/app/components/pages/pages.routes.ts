import { PageComponent }       from './page/page.component';
import { PagecreateComponent } from './pagecreate/pagecreate.component';
import { PagesComponent }      from './pages/pages.component';
import { PagewriteComponent }  from './pagewrite/pagewrite.component';


export const PagesRoutes = [
  {
    path: 'pages/:page_id',
    component: PageComponent
  }, {
    path: 'createpage',
    component: PagecreateComponent
  }, {
    path: 'pages',
    component: PagesComponent
  }, {
    path: 'pages/write/:page_id',
    component: PagewriteComponent
  }
];