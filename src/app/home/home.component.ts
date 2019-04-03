import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Project from '../../data-structures/Project';
import designProjects from '../../data/design-projects';
import photographyProjects from '../../data/photography-projects';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [
    './css/home.component.css',
    './css/home-media-queries.component.css',
  ],
})
export class HomeComponent implements OnInit {
  selectedProject: Project;
  type: string;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.type = this.route.snapshot.data.type;
    this.selectedProject = window.screen.width <= 940 ? this.projects[0] : null
  }

  get image(): string {
    return this.selectedProject ? this.selectedProject.src : '';
  }

  get projects(): Array<Project> {
    if (this.type === 'design') return designProjects;
    else return photographyProjects;
  }

  onSelectedProject(project: Project): void {
    this.selectedProject = project;
  }
}
