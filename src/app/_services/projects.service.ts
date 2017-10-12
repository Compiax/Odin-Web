import { Project } from './../_models/project.model';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  constructor(private http: Http) { }

  /**
   * Return list of all projects
   */
  getProjects() {
    const url = `${environment.api_url}/projects`;
    return this.http.get(url, {withCredentials: true})
      .toPromise()
      .then((res: Response) => {
        return new Promise<Project[]>((resolve, reject) => {
          if (res.json().data) {
            resolve(res.json().data.map(p => {
              return new Project(p.attributes.name, p.attributes.description, p.id, p.attributes.data);
            }));
          } else {
            resolve([]);
          }
        });
      });
  }

  /**
   * Return details about single project
   */
  getProject(id: String){
    const url = `${environment.api_url}/projects/${id}`;
    return this.http.get(url, {withCredentials: true})
      .toPromise()
      .then((res: Response) => {
          return new Promise<Project>((resolve, reject) => {
            if (res.json() && res.json().data) {
              const p = res.json().data[0];
              resolve(new Project(p.attributes.name, p.attributes.description, p.id, p.attributes.data));
            } else {
              console.log(res);
              reject('Invalid JSON response');
            }
          });
      });
  }

  /**
   * Creates a blank project with the title "Untitled Project" and no description
   */
  createNewProject() {
    return this.createProject(new Project('Untitled Project', '', null, ''));
  }

  /**
   * Creates a project
   */
  createProject(project: Project) {
    const url = `${environment.api_url}/projects`;
    return this.http.post(url, project, {withCredentials: true})
      .toPromise()
      .then((res: Response) => {
        return new Promise<Project>((resolve, reject) => {
          const p = res.json().data[0];
          resolve(new Project(p.attributes.name, p.attributes.description, p.id, p.attributes.data));
        });
      });
  }

  /**
   * Updates the project
   */
  saveProject(project: Project) {
    console.log('saveProject')
    const url = `${environment.api_url}/projects/${project.id}/save`;
    return this.http.patch(url, {projectID: project.id, nodes: project.data, newData: project}, {withCredentials: true})
      .toPromise();
  }

  /**
   * Deletes a project
   */
  deleteProject(project: Project) {
    const url = `${environment.api_url}/projects/${project.id}`;
    return this.http.delete(url, {withCredentials: true})
      .toPromise();
  }

  /**
   * Executes a project
   */
  execute(project: Project) {
    const url = `${environment.api_url}/projects/${project.id}/execute`;
    return this.http.post(url, {projectID: project.id, nodes: project.data}, {withCredentials: true})
      .toPromise();
  }

  /**
   * Exports a project
   */
  export(project: Project) {
    const url = `${environment.api_url}/projects/${project.id}/export`;
    return this.http.post(url, {projectID: project.id, nodes: project.data}, {withCredentials: true})
      .toPromise();
  }
}
