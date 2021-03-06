import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HTTP_PROVIDERS }     from '@angular/http';

import { AuthService }    from './shared/services/auth.service';
import { GroupService }   from './shared/services/group.service';
import { PageService }    from './shared/services/page.service';
import { PostService }    from './shared/services/post.service';
import { UserService }    from './shared/services/user.service';

import { LoggedInGuard } from './shared/loggedinguard';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, LoggedInGuard, AuthService,
                                             GroupService,
                                             PageService,
                                             PostService,
                                             UserService] 
})
export class AppComponent {}