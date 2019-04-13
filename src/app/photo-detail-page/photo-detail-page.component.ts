import { Component, OnInit } from '@angular/core';
import photographyProjects from 'src/data/photography-projects';
import Project from 'src/data-structures/Project';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: ['./photo-detail-page.component.css']
})
export class PhotoDetailPageComponent implements OnInit {
  public project: Project;
  public nextProject: Project;
  public currentPhotoIdx: number = 0;
  public imageWidths: string[] = [];

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(({ id }) => {
      photographyProjects.forEach((project, index) => {
        if (project.id === +id) {
          this.project = project;
          this.nextProject = photographyProjects[(index + 1) % photographyProjects.length];
        }
      });
      this.getImageWidths();
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

  carouselRight(): void {
    this.currentPhotoIdx++;
    this.move();
  }

  carouselLeft(): void {
    this.currentPhotoIdx--;
    this.move();
  }

  move(): void {
    const carouselContainer = document.getElementById('carousel-container');
    carouselContainer.style.transform = `translateX(-${this.currentPhotoIdx * 100}%)`;
  }

  get rightArrowClass(): string {
    return `arrow arrow-right${this.currentPhotoIdx === this.project.photos.length - 1 ? ' hidden' : ''}`;
  }

  get leftArrowClass(): string {
    return `arrow arrow-left${this.currentPhotoIdx === 0 ? ' hidden' : ''}`;
  }
}
