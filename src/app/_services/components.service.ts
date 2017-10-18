import { ComponentModel } from './../_models/component.model';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ComponentsService {
  constructor(private http: Http) { }

  getComponents() {
    const url = environment.api_url + '/components/';
    return this.http.get(url, {withCredentials: true})
    .toPromise()
    .then((res: Response) => {
      return new Promise<ComponentModel[]>((resolve, reject) => {
        if (res.json() && res.json().data) {
          const components = [];
          res.json().data.forEach(c => {
            components.push(new ComponentModel(c));
          });
          resolve(components);
        }
      });
    });
  }

  getComponent(id: String): Promise<ComponentModel> {
    const url = environment.api_url + '/components/' + id;
    return this.http.get(url, {withCredentials: true})
    .toPromise()
    .then((res: Response) => {
      return new Promise<ComponentModel>((resolve, reject) => {
        if (res.json() && res.json().data) {
          resolve(new ComponentModel(res.json().data[0]));
        }
      });
    });
  }

  /**
   * Deletes a project
   */
  deleteComponent(component: ComponentModel) {
    const url = `${environment.api_url}/components/${component.id}`;
    return this.http.delete(url, {withCredentials: true})
      .toPromise();
  }
}
