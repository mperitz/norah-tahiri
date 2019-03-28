import { Component, Input } from '@angular/core';
import Project from 'src/data-structures/Project';

@Component({
  selector: 'side-image',
  templateUrl: './side-image.component.html',
  styleUrls: ['./side-image.component.css']
})
export class SideImageComponent {
  @Input() imageSrc: string;
  @Input() projects: Array<Project>;
  @Input() selectedProject: Project;
  @Input() defaultBackgroundSrc: string;

  ngOnInit() {
    console.log(this.defaultBackgroundSrc)
  }
}
