import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/X-www-form-urlencoded',
                                 'Access-Control-Allow-Credentials': 'true',
                                 'Access-Control-Allow-Origin': `${environment.api_url}`});
  constructor(private http: Http) { }

  register(username: string, email: string, password: string) {
    const url = `${environment.api_url}/auth/register`;
    const data = 'username=' + username + '&email=' + email + '&password=' + password;

    return this.http.post(url, data, {headers: this.headers, withCredentials: true})
    .toPromise()
    .then((res) => {
        return new Promise((resolve, reject) => {
            console.log(res.headers);
            resolve(res);
        });
    });
  }

  login(username: string, password: string) {
    const data = 'username=' + username + '&password=' + password;
    const url = `${environment.api_url}/auth/login`;

    return this.http.post(url, data, {headers: this.headers, withCredentials: true})
    .toPromise()
    .then((res) => {
        return new Promise((resolve, reject) => {
          if (res.status === 200) {
            localStorage.setItem('currentUser', res.json().data[0]);
            console.log(localStorage.getItem('currentUser'));
            resolve(res);
            console.log("Logged in");
            console.log(res.headers);
          } else {
            reject(res);
          }
        });
    });
  }

  isLoggedIn() {
    const url = `${environment.api_url}/auth/loggedIn`;

    console.log('Calling isLoggedIn');
    return this.http.post(url, '', {headers: this.headers, withCredentials: true})
    .toPromise();
  }

}
