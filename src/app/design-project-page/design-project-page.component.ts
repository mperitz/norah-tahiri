import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Project from 'src/data-structures/Project';
import designProjects from 'src/data/design-projects';

@Component({
  selector: 'design-project-page',
  templateUrl: './design-project-page.component.html',
  styleUrls: ['./design-project-page.component.css']
})
export class DesignProjectPageComponent implements OnInit {
  project: Project;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(({ id }) => {
      this.project = designProjects.find((project) => project.id === +id);
      console.log(this.project)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get imageUrl(): string {
    return `url(${this.project.src})`;
  }
}
