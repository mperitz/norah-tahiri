import { Component, Input } from '@angular/core';

import Project from 'src/data-structures/Project';
import isVisibleIfTruthy from '../../util/isVisibleIfTruthy';

@Component({
  selector: 'side-image',
  templateUrl: './side-image.component.html',
  styleUrls: [
    './css/side-image.component.css',
    './css/side-image-media-queries.component.css',
  ],
})
export class SideImageComponent {
  @Input() imageSrc: string;
  @Input() projects: Array<Project>;
  @Input() selectedProject: Project;
  @Input() type: string;

  getDefaultOpacityClass(type: string): string {
    return isVisibleIfTruthy(
      this.selectedProject.isDefault,
      type === this.type,
    );
  }

  getProjectOpacityClass(name: string): string {
    return isVisibleIfTruthy(
      !this.selectedProject.isDefault,
      this.selectedProject.name === name,
    );
  }

  getProjectBackground(src: string): string {
    return `url(${src})`;
  }
}
