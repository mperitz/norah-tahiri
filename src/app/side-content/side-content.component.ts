import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import Project from 'src/data-structures/Project';

import designProjects from '../../data/design-projects'
import photographyProjects from '../../data/photography-projects'

@Component({
  selector: 'side-content',
  templateUrl: './side-content.component.html',
  styleUrls: [
    './css/side-content.component.css',
    './css/side-content-media-queries.component.css',
  ],
})
export class SideContentComponent implements OnInit {
  @Input() projects: Array<Project>;
  @Input() selectedProject: Project;
  @Input() type: string;

  @Output() selected = new EventEmitter();

  interval: any = null;

  ngOnInit() {
    this.maybeSetBackgroundInterval();
    window.addEventListener('resize', this.maybeSetBackgroundInterval);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.maybeSetBackgroundInterval);
  }

  selectProject(project: Project): void {
    this.selected.emit(project);
  }

  deselectProject(): void {
    this.selected.emit(null);
  }

  getListItemColor(project: Project): string {
    if (!this.selectedProject) return '#363636';
    else if (this.selectedProject.name === project.name) return this.selectedProject.color;
    else return '#d3d4d5';
  }

  maybeSetBackgroundInterval = () => {
    if (window.screen.width <= 940 && !this.interval) {
      const projects: Array<Project> = this.type === 'design' ? designProjects : photographyProjects;
      let index: number = 1;
      this.interval = setInterval(() => {
        this.selected.emit(projects[index]);
        index = (index + 1) % projects.length;
      }, 5000);
    } else if (window.screen.width > 940 && this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  get dotColor(): string {
    return this.selectedProject ? this.selectedProject.color : '#363636'
  }

  getDotDisplay(type: string): string {
    return this.type === type ? 'block' : 'none'
  }

}
