import { environment } from 'environments/environment';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  executeSession(data: any) {
    const url = environment.api_url + '/session/execute';
    return this.http.post(url, {nodes: data}, {headers: this.headers, withCredentials: true})
    .toPromise()
    .then((res) => {
        return new Promise((resolve, reject) => {
            if (res.status === 200) {
                resolve(res);
            } else {
                reject(res);
            }
        });
    });
  }
}
