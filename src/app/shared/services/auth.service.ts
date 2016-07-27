import { Injectable }              from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';

import { ServiceConfig } from './service-config';


@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  register(input) {
    let body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'users', body)
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  login(input) {
    let body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'users/login', body)
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  confirm(token) {
    return this.http.get(ServiceConfig.URL + 'users/confirm/' + token)
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
