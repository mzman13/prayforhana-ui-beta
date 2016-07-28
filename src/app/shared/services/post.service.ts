import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceConfig } from './service-config';


@Injectable()
export class PostService {

  constructor(private http: Http) {}

  getPost(post_id) {
    return this.http.get(ServiceConfig.URL + 'posts/' + post_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  createPost(input) {
    let body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'posts', body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  updatePost(input, post_id) {
    let body = JSON.stringify(input);
    return this.http.put(ServiceConfig.URL + 'posts/' + post_id, body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  deletePost(post_id) {
    return this.http.delete(ServiceConfig.URL + 'posts/' + post_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  // get posts for logged in user
  getPosts() {
    return this.http.get(ServiceConfig.URL + 'posts/me', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  // get posts for other user
  getUserPosts(user_id) {
    return this.http.get(ServiceConfig.URL + 'posts/users/' + user_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  createPagePost(input, page_id) {
    let body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'posts/pages/' + page_id, body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
