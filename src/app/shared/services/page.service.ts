import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceConfig } from './service-config';


@Injectable()
export class PageService {

  constructor(private http: Http) {}

  getPage(page_id) {
    return this.http.get(ServiceConfig.URL + 'pages/' + page_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  createPage(input) {
    let body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'pages/', body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  updatePage(input, page_id) {
    let body = JSON.stringify(input);
    return this.http.put(ServiceConfig.URL + 'pages/' + page_id, body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  deletePage(page_id) {
    return this.http.delete(ServiceConfig.URL + 'pages/' + page_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  getPages() {
    return this.http.get(ServiceConfig.URL + 'pages/me', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  searchPages(query) {
    let queryString =`?q=${query}`;
    return this.http.get(ServiceConfig.URL + 'pages/search' + queryString, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  followPage(page_id) {
    return this.http.put(ServiceConfig.URL + 'pages/follow/' + page_id, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  unfollowPage(page_id) {
    return this.http.put(ServiceConfig.URL + 'pages/unfollow/' + page_id, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
