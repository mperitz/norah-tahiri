import { Component, Input, Output, EventEmitter } from '@angular/core';
import Project from 'src/data-structures/Project';

@Component({
  selector: 'side-content',
  templateUrl: './side-content.component.html',
  styleUrls: [
    './css/side-content.component.css',
    './css/side-content-media-queries.component.css',
  ],
})
export class SideContentComponent {
  @Input() projects: Array<Project>;
  @Input() selectedProject: Project;
  @Input() type: string;

  @Output() selected = new EventEmitter();

  selectProject(project: Project): void {
    this.selected.emit(project);
  }

  deselectProject(): void {
    this.selected.emit(null);
  }

  getListItemColor(project: Project): string {
    const { isDefault, name } = this.selectedProject;
    if (isDefault) return '#363636';
    else if (name === project.name) return this.selectedProject.color;
    else return '#d3d4d5';
  }

  get dotColor(): string {
    return !this.selectedProject.isDefault ? this.selectedProject.color : '#363636'
  }

  getDotDisplay(type: string): string {
    return this.type === type ? 'block' : 'none'
  }

  getLinkTo(url: string): string {
    return `/${this.type}/${url}`;
  }
}
