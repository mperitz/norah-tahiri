import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import yearString from 'src/data/year';

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
  public description: string = 'Norah Tahiri is a multi-disciplinary Designer and Photographer based in Brooklyn.';
  public email: string = 'mailto:ntahiri@gmail.com';
  public instagram: string = 'https://www.instagram.com/ntahiri/';
  public previousClients: string = 'Previous clients include: The Obama Foundation, Scholastic, LiveOnNY, The Standard, One Night, Boys and Girls Club of America, Merck for Mothers, Prodigy Network, The Rockefeller Foundation, Abbott, Perry Ellis, Douglas Elliman and more.';
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
