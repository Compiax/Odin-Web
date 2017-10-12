import { Project } from './../_models/project.model';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/toPromise';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  executeSession(data: any, project: Project) {
    const url = environment.api_url + '/session/execute';
    return this.http.post(url, {nodes: data, projectID: project.id}, {headers: this.headers, withCredentials: true})
    .toPromise()
    .then((res: Response) => {
        return new Promise((resolve, reject) => {
            if (res.status === 200) {
                console.log(res)
                resolve(res.json());
            } else {
                reject(res);
            }
        });
    });
  }
}
