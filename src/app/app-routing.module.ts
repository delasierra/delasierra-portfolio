import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { SECTION } from './models/routing.model';
import { AboutComponent } from './sections/about/about.component';

const ROUTES: Routes = [
  {
    path: SECTION.home,
    component: HomeComponent
  },

  {
    path: SECTION.work,
    loadChildren: './sections/work/work.module#WorkModule'
  },
  {
    path: SECTION.about,
    component: AboutComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule {}
