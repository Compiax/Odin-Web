import { ProjectsService } from '../_services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-projects',
  templateUrl: './browse-projects.component.html'
})
export class BrowseProjectsComponent implements OnInit {

  private projects: any[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    let self = this;
    return this.projectsService.getProjects()
    .then(function(res: any) {
      return new Promise<{}[]>((resolve, reject) => {
        let data: {}[];
        console.log(res._body);
        if (JSON.parse(res._body).data === undefined) {
          // There are no projects
          return [];
        };
        data = JSON.parse(res._body).data.map((item) => {
          return {
            id: item.id,
            description: item.attributes.description,
            name: item.attributes.name,
            created: item.attributes.created
          };
        });
        console.log(data);
        self.projects = data;
        console.log(self.projects);
      });
    });
  }

}
