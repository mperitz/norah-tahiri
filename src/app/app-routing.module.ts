import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { DesignProjectPageComponent } from './design-project-page/design-project-page.component';
import { PhotoDetailPageComponent } from './photo-detail-page/photo-detail-page.component';

const routes: Routes = [
  {
    path: 'design',
    component: HomeComponent,
    data: { type: 'design' },
  },
  {
    path: 'design/:id',
    component: DesignProjectPageComponent,
  },
  {
    path: 'photography',
    component: HomeComponent,
    data: { type: 'photography' },
  },
  {
    path: 'photography/:id',
    component: PhotoDetailPageComponent,
  },
  {
    path: 'about/:type',
    component: AboutComponent,
  },
  {
    path: 'about',
    redirectTo: 'about/design',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: '',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
