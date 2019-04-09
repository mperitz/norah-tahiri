import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideImageComponent } from './side-image/side-image.component';
import { SideContentComponent } from './side-content/side-content.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { MenuComponent } from './menu/menu.component';
import { MobileContentListComponent } from './mobile-content-list/mobile-content-list.component';
import { DesignProjectPageComponent } from './design-project-page/design-project-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideImageComponent,
    SideContentComponent,
    NotFoundComponent,
    AboutComponent,
    MobileNavComponent,
    MenuComponent,
    MobileContentListComponent,
    DesignProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
