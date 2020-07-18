import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './css/about.component.css',
    './css/about-media-queries.component.css',
  ],
})
export class AboutComponent implements OnInit {
  redirectString: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(({ type }) => {
      this.redirectString = type;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get redirect(): string {
    return `/${this.redirectString}`;
  }
}
