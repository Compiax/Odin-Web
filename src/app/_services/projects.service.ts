import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-Type': 'application/X-www-form-urlencoded'});
  constructor(private http: Http) { }

  getProjects() {
    const url = environment.api_url + ':3000/projects/';
    return this.http.get(url, {withCredentials: true})
    .toPromise()
    .then((res) => {
      return new Promise((resolve, reject) => {
        console.log(res);
        resolve(res);
      });
    });
  }

  getProject(id: String): Promise<{}> {
    const url = environment.api_url + ':3000/projects/' + id;
    return this.http.get(url, {withCredentials: true})
    .toPromise()
    .then((res) => {
      return new Promise((resolve, reject) => {
        console.log(res);
        resolve(res);
      });
    });
  }
}
