import { Project } from './../_models/project.model';
import { ProjectsService } from './../_services/projects.service';
import { AuthService } from './../_services/auth.service';
import { User } from './../_models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: User = null;
  public projects: Project[] = []

  constructor(private authService: AuthService,
              private projectsService: ProjectsService) {

  }

  ngOnInit() {
    this.authService.isLoggedIn()
    .then(u => {
      this.user = u;
    })
    .catch(err => {
      console.log(err);
    });
    this.projectsService.getProjects()
    .then(projects => {
      this.projects = projects;
    })
    .catch(err => {
      console.log(err)
    })
  }
}