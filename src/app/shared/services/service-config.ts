import { Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';


export class ServiceConfig {

  static URL = 'http://localhost:3000/api/';  // URL to web api
  //static URL = 'http://prayforhana-loadbalancer-563429289.us-east-1.elb.amazonaws.com/api/';  // URL to web api

  public static createHeader() {
		let headers = new Headers();
  	let authToken = localStorage.getItem('hana_auth_token');
  	headers.append('Authorization', `Bearer ${authToken}`);
		return headers;
	}

  public static extractData(res: Response) {
    return res.json() || { };
  }
  
  public static handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}