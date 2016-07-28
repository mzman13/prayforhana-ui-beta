import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceConfig } from './service-config';


@Injectable()
export class GroupService {

  constructor(private http: Http) {}

  getGroup(page_id) {
    return this.http.get(ServiceConfig.URL + 'groups/' + page_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  createGroup(input) {
    let body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'groups/', body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  updateGroup(input, group_id) {
    let body = JSON.stringify(input);
    return this.http.put(ServiceConfig.URL + 'groups/' + group_id, body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  leaveGroup(group_id) {
    return this.http.put(ServiceConfig.URL + 'groups/leave/' + group_id, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  deleteGroup(group_id) {
    return this.http.delete(ServiceConfig.URL + 'groups/' + group_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  getGroups() {
    return this.http.get(ServiceConfig.URL + 'groups/me', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
