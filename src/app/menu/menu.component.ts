import { Component, OnInit } from '@angular/core';
import designProjects from 'src/data/design-projects';
import Project from 'src/data-structures/Project';
import photographyProjects from 'src/data/photography-projects';
import yearString from 'src/data/year';

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
  footerClass: string;

  public year: string = yearString;

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
  }

  togglePhotographyOn() {
    this.photography = true;
    this.toggleDesignOff();
  }

  togglePhotographyOff() {
    this.photography = false;
  }

  getArrowClass(type: string): string {
    return `arrow ${this[type] ? 'open' : ''}`;
  }

  getHeight = (): void => {
    const scrollable: boolean = document.body.scrollHeight > window.screen.availHeight;
    this.heightClass = scrollable ? 'auto-height' : 'full-height';
    this.footerClass = scrollable ? '' : 'fixed';
  }
}
