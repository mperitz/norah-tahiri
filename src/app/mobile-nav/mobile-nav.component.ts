import { Component, OnInit } from '@angular/core';
import isVisibleIfTruthy from 'src/util/isVisibleIfTruthy';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: [
    './css/mobile-nav.component.css',
    './css/mobile-nav-media-queries.component.css',
  ],
})
export class MobileNavComponent {
  checkHiddenHamburger(): string {
    return isVisibleIfTruthy(!this.isMenu);
  }

  checkHiddenX(): string {
    return isVisibleIfTruthy(this.isMenu);
  }

  get isMenu(): boolean {
    return window.location.pathname === '/menu';
  }
}
