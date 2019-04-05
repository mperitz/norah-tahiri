import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  design: boolean = false;
  photography: boolean = false;

  toggleDesign(): void {
    this.design = !this.design;
  }

  togglePhotography(): void {
    this.photography = !this.photography;
  }

  getArrowClass(type: string): string {
    return `arrow ${this[type] ? 'open' : ''}`;
  }
}
