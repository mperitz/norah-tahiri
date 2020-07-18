import { Component, OnInit } from '@angular/core';
import photographyProjects from 'src/data/photography-projects';
import Project from 'src/data-structures/Project';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: [
    './css/photo-detail-page.component.css',
    './css/photo-detail-page-media-queries.component.css',
  ]
})
export class PhotoDetailPageComponent implements OnInit {
  public project: Project;
  public nextProject: Project;
  public currentPhotoIdx: number = 0;
  public imageWidths: string[] = [];
  public imageHeights: number[] = [];
  public showProjectInfo: boolean = false;
  public startX: number;
  public draggable: boolean = false;
  public minSwipeDistance: number = 100;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(({ name }) => {
      photographyProjects.forEach((project, index) => {
        if (project.url === name) {
          this.project = project;
          this.nextProject = photographyProjects[(index + 1) % photographyProjects.length];
        }
      });
      this.getImageWidths();
      this.getImageHeights();
    });
    window.addEventListener('resize', this.getImageWidths);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    window.removeEventListener('resize', this.getImageWidths);
  }

  getImageUrl(src) {
    return `url(${src})`;
  }

  getImageWidths = (): void => {
    this.imageWidths = this.project.photos.map(({ ratio }: any) => this.getWidth(ratio));
  }

  getImageHeights = (): void => {
    this.imageHeights = this.project.photos.map(({ ratio }: any) => document.body.clientWidth / ratio);
  }

  getWidth(ratio: number): string {
    const carouselElement = document.getElementById('carousel');
    const { clientHeight } = carouselElement;
    const { clientHeight: bodyHeight, clientWidth: bodyWidth } = document.body;
    const heightPercentage = (clientHeight / bodyHeight);
    const widthPercentage = ratio * heightPercentage * (bodyHeight / bodyWidth);
    return `${widthPercentage * 100}%`
  }

  photoWidth(idx: number): string {
    return this.imageWidths[idx];
  }

  photoWidthMobile(idx: number): string {
    return `${this.imageHeights[idx]}px`;
  }

  onTouchStart(evt) {
    this.startX = evt.touches[0].screenX;
    this.draggable = true;
  }

  onTouchEnd(evt) {
    const { screenX } = evt.changedTouches[0];
    if (screenX - this.startX < -this.minSwipeDistance && this.currentPhotoIdx < this.project.photos.length - 1) this.carouselRight();
    else if (screenX - this.startX > this.minSwipeDistance && this.currentPhotoIdx > 0) this.carouselLeft();
    this.draggable = false;
  }

  carouselRight(): void {
    this.currentPhotoIdx++;
    this.move();
  }

  carouselLeft(): void {
    this.currentPhotoIdx--;
    this.move();
  }

  move(): void {
    const carouselContainer = document.getElementById(`carousel-container${document.body.clientWidth <= 500 ? '-mobile' : ''}`);
    carouselContainer.style.transform = `translateX(-${this.currentPhotoIdx * 100}vw)`;
  }

  toggleProjectInfo(): void {
    this.showProjectInfo = !this.showProjectInfo;
  }

  isHidden(idx: number): string {
    return idx !== this.currentPhotoIdx ? 'hidden' : '';
  }

  get rightArrowClass(): string {
    return `arrow arrow-right${this.currentPhotoIdx === this.project.photos.length - 1 ? ' hidden' : ''}${this.showProjectInfo ? ' dim' : ''}`;
  }

  get leftArrowClass(): string {
    return `arrow arrow-left${this.currentPhotoIdx === 0 ? ' hidden' : ''}${this.showProjectInfo ? ' dim' : ''}`;
  }

  get projectInfoClass(): string {
    return `project-info${this.showProjectInfo ? '' : ' hidden'}`;
  }
}
