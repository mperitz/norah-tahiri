import { Component, Input } from '@angular/core';
import Project from 'src/data-structures/Project';

@Component({
  selector: 'side-image',
  templateUrl: './side-image.component.html',
  styleUrls: ['./side-image.component.css'],
})
export class SideImageComponent {
  @Input() imageSrc: string;
  @Input() projects: Array<Project>;
  @Input() selectedProject: Project;
  @Input() type: string;

  getDefaultOpacityClass(type: string): string {
    return this.selectedProject || this.type !== type ?
      'hidden' :
      'visible';
  }

  getProjectOpacityClass(name: string): string {
    return this.selectedProject && this.selectedProject.name === name ?
      'visible' :
      'hidden';
  }

  getProjectBackground(src: string): string {
    return `url(${src})`;
  }
}
