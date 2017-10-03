import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { User } from './../_models/user.model';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  register (user: User) {
    const data = new URLSearchParams;
    data.append('username', user.username);
    data.append('password', user.password);
    data.append('email', user.email);

    const url = `${environment.api_url }/auth/register`;

    return this.http.post(url, data, { withCredentials: true })
    .toPromise()
    .then((res: Response) => {
        return new Promise<User>((resolve, reject) => {
          const u = res.json()['data'][0];
          resolve(new User(u.attributes.username, null, u.attributes.email, u.id));
        });
    });
  }

  login(user: User) {
    const data = new URLSearchParams;
    data.append('username', user.username);
    data.append('password', user.password);

    const url = `${environment.api_url}/auth/login`;

    return this.http.post(url, data, { withCredentials: true })
    .toPromise()
    .then((res: Response) => {
        return new Promise<User>((resolve, reject) => {
          const u = res.json()['data'][0];
          resolve(new User(u.attributes.username, null, u.attributes.email, u.id));
        });
    });
  }

  isLoggedIn() {
    // I just changed this, but have not tested it.
    // @todo: Test
    const url = `${environment.api_url}/auth/check`;

    // This will call .then if logged in, or .catch if not
    return this.http.post(url, '', { withCredentials: true })
    .toPromise()
    .then((res: Response) => {
      return new Promise<User>((resolve, reject) => {
        const u = res.json()['data'][0];
        resolve(new User(u.attributes.username, null, u.attributes.email, u.id));
      });
  });
  }

  logOut() {
    // I just changed this, but have not tested it.
    // @todo: test
    const url = `${environment.api_url}/auth/logout`;

    return this.http.post(url, '', { withCredentials: true })
    .toPromise();
  }
}
