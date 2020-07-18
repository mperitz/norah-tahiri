import { Component, Input } from '@angular/core';
import Project from 'src/data-structures/Project';

@Component({
  selector: 'mobile-content-list',
  templateUrl: './mobile-content-list.component.html',
  styleUrls: ['./mobile-content-list.component.css']
})
export class MobileContentListComponent {
  @Input() projects: Array<Project>;
  @Input() type: string;

  getBackgroundImageUrl(src) {
    return `url(${src})`;
  }
}
