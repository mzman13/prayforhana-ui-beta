import { MyprofileComponent }       from './myprofile/myprofile.component';
import { ProfileComponent }         from './profile/profile.component';
import { ProfileposteditComponent } from './profilepostedit/profilepostedit.component';
import { ProfilesComponent }        from './profiles/profiles.component';
import { ProfilewriteComponent }    from './profilewrite/profilewrite.component';


export const ProfilesRoutes = [
  {
    path: 'profiles/me',
    component: MyprofileComponent
  }, {
    path: 'profiles/:profile_id',
    component: ProfileComponent
  }, {
    path: 'edit/:post_id',
    component: ProfileposteditComponent
  }, {
    path: 'profiles',
    component: ProfilesComponent
  }, {
    path: 'write',
    component: ProfilewriteComponent
  }
];