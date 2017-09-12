import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  executeSession(data: any) {
    const url = environment.api_url + '/session/execute';
    console.log(url);
    return this.http.post(url, data, {headers: this.headers, withCredentials: true})
    .toPromise()
    .then((res) => {
        return new Promise((resolve, reject) => {
            if (res.status === 200) {
                console.log("Success");
                console.log(res);
                resolve(res);
            } else {
                console.log("ERROR");
                console.log(res);
                reject(res);
            }
        });
    });
  }
}
