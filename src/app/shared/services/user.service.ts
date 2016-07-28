import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceConfig } from './service-config';


@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getUsers() {
    return this.http.get(ServiceConfig.URL + 'profiles/following', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  getUser(profile_id) {
    return this.http.get(ServiceConfig.URL + 'profiles/' + profile_id, { headers: ServiceConfig.createHeader() })
                .map(ServiceConfig.extractData)
                .catch(ServiceConfig.handleError);
  }

  followUser(profile_id) {
    return this.http.put(ServiceConfig.URL + 'profiles/follow/' + profile_id, '', { headers: ServiceConfig.createHeader() })
                .map(ServiceConfig.extractData)
                .catch(ServiceConfig.handleError);
  }

  unfollowUser(profile_id) {
    return this.http.put(ServiceConfig.URL + 'profiles/unfollow/' + profile_id, '', { headers: ServiceConfig.createHeader() })
                .map(ServiceConfig.extractData)
                .catch(ServiceConfig.handleError);
  }

  searchUsers(query) {
    let queryString =`?q=${query}`;
    return this.http.get(ServiceConfig.URL + 'profiles/search' + queryString, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
