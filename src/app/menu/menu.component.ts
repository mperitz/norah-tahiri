import { Component, OnInit } from '@angular/core';
import designProjects from 'src/data/design-projects';
import Project from 'src/data-structures/Project';
import photographyProjects from 'src/data/photography-projects';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  design: boolean = true;
  photography: boolean = false;
  designProjects: Array<Project> = designProjects;
  photographyProjects: Array<Project> = photographyProjects;
  heightClass: string;

  ngOnInit() {
    setTimeout(this.getHeight, 200);
    window.addEventListener('resize', this.getHeight);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.getHeight);
  }

  toggleDesign(): void {
    if (this.design) this.toggleDesignOff();
    else this.toggleDesignOn();
  }

  togglePhotography(): void {
    if (this.photography) this.togglePhotographyOff();
    else this.togglePhotographyOn();
  }

  toggleDesignOn() {
    this.design = true;
    this.togglePhotographyOff();
  }

  toggleDesignOff() {
    this.design = false;
    this.togglePhotographyOn();
  }

  togglePhotographyOn() {
    this.photography = true;
    this.toggleDesignOff();
  }

  togglePhotographyOff() {
    this.photography = false;
    this.toggleDesignOn()
  }

  getArrowClass(type: string): string {
    return `arrow ${this[type] ? 'open' : ''}`;
  }

  getHeight = (): void => {
    this.heightClass = document.body.scrollHeight > window.screen.availHeight ? 'auto-height' : 'full-height';
  }
}
