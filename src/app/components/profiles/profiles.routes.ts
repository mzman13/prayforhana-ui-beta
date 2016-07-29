import { MyprofileComponent }       from './myprofile/myprofile.component';
import { ProfileComponent }         from './profile/profile.component';
import { ProfileposteditComponent } from './profilepostedit/profilepostedit.component';
import { ProfilesComponent }        from './profiles/profiles.component';
import { ProfilewriteComponent }    from './profilewrite/profilewrite.component';

import { LoggedInGuard } from '../../shared/loggedinguard';


export const ProfilesRoutes = [
  {
    path: 'me',
    component: MyprofileComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'profiles/:profile_id',
    component: ProfileComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'edit/:post_id',
    component: ProfileposteditComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'profiles',
    component: ProfilesComponent,
    canActivate: [LoggedInGuard]
  }, {
    path: 'write',
    component: ProfilewriteComponent,
    canActivate: [LoggedInGuard]
  }
];