import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './sections/home/home.component';
import {ContactComponent} from './sections/contact/contact.component';
import {SECTION} from './models/routing.model';
import {AboutComponent} from './sections/about/about.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: SECTION.home,
    pathMatch: 'full'},
  {
    path: SECTION.home,
    component: HomeComponent},
  {
    path: SECTION.about,
    component: AboutComponent},
  {
    // TODO change component to module (adding tunneling)
    path: SECTION.contact,
    component: ContactComponent},

  //TODO add tunneling flow example
  // {path: PAGE.about, component: AboutComponent, canActivate: [WorkflowGuard]},
  // {path: PAGE.contact, component: ContactComponent, canActivate: [WorkflowGuard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES, {
      useHash:            Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ]
})
export class AppRoutingModule {
}
