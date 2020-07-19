import { Component, Input } from '@angular/core';

import Project from 'src/data-structures/Project';
import getValueFromString from 'src/util/getValueFromString';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() project: Project;
  public carouselId: string = 'carousel-container';
  public isMobile: boolean = false;

  constructor() {
    this.setIsMobile();
  }

  ngOnInit() {
    window.addEventListener('resize', this.setIsMobile);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setIsMobile);
  }

  setIsMobile = (): void => {
    this.isMobile = document.body.clientWidth <= 500;
  }

  getImgUrl(imgUrl: string): string {
    return `url(${imgUrl})`;
  }
}
