import { Project } from './../_models/project.model';
import { ProjectsService } from '../_services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-projects',
  templateUrl: './browse-projects.component.html'
})
export class BrowseProjectsComponent implements OnInit {

  private projects: Project[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.getProjects()
      .then((projects: Project[]) => {
          console.log(projects);
          this.projects = projects;
      });
  }

  private deleteProject(project: Project) {
    console.log(project);
    this.projectsService.deleteProject(project);
    this.loadProjects();
  }

}
