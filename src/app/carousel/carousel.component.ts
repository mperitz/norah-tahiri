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
  public draggable: boolean = false;
  public currX: number;
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

  toggleDraggableOn = (evt): void => {
    this.currX = evt.x;
    this.draggable = true;
  }

  toggleDraggableOff(): void {
    this.currX = null;
    this.draggable = false;
  }

  drag = (evt): void => {
    let { x } = evt;
    if (!x) x = evt.touches[0].screenX;
    if (this.draggable) {
      const pixelsToMove = Math.abs(x - this.currX);
      if (x < this.currX) this.dragRight(pixelsToMove);
      else if (x > this.currX) this.dragLeft(pixelsToMove);
    }
    this.currX = x;
  }

  dragRight(pixelsToMove: number) {
    const carouselElement = document.getElementById(this.carouselId);
    const currLeft: number = getValueFromString(carouselElement.style.left);
    const max: number = -(carouselElement.scrollWidth - carouselElement.clientWidth);
    if (currLeft > max) {
      const newValue: number = currLeft - pixelsToMove;
      carouselElement.style.left = `${newValue}px`;
    }
    if (getValueFromString(carouselElement.style.left) < max) {
      carouselElement.style.left = `${max}px`;
    }
  }

  dragLeft(pixelsToMove: number) {
    const carouselElement = document.getElementById(this.carouselId);
    const currLeft: number = getValueFromString(carouselElement.style.left);
    if (currLeft < 0) {
      const newValue: number = currLeft + pixelsToMove;
      carouselElement.style.left = `${newValue}px`;
    }
    if (getValueFromString(carouselElement.style.left) > 0) {
      carouselElement.style.left = '0px';
    }
  }
}
