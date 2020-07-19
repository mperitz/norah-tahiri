import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import yearString from 'src/data/year';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [
    './css/not-found.component.css',
    './css/not-found-media-queries.component.css',
  ],
})
export class NotFoundComponent implements OnInit {
  redirectString: string;
  private sub: Subscription;

  public year: string = yearString;

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
