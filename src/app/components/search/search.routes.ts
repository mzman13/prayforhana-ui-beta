import { SearchComponent } from './search.component';

import { LoggedInGuard } from '../../shared/loggedinguard';


export const SearchRoutes = [
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [LoggedInGuard]
  }
];