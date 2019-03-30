import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'design',
    component: HomeComponent,
    data: { type: 'design' },
  },
  {
    path: 'photography',
    component: HomeComponent,
    data: { type: 'photography' },
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
