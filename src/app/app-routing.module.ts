import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './sections/home/home.component';
import {ContactComponent} from './sections/contact/contact.component';
import {SECTION} from './models/routing.model';
import {AboutComponent} from './sections/about/about.component';
import {WorkModule} from './sections/work/work.module';

const ROUTES: Routes = [
    // {
    //     path:       '',
    //     redirectTo: SECTION.home,
    //     pathMatch:  'full',
    // },
    {
        path:      SECTION.home,
        component: HomeComponent,
    },
    {
        path:         SECTION.work,
        loadChildren: './sections/work/work.module#WorkModule',
    },
    // {
    //     path:         SECTION.work,
    //     component: WorkModule,
    // },
    {
        path:      SECTION.about,
        component: AboutComponent,
    },
    {
        path:      SECTION.contact,
        component: ContactComponent,
    },
    {path: '**', component: HomeComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [
        // RouterModule.forRoot(ROUTES, {
        //     useHash:            Boolean(history.pushState) === false,
        //     preloadingStrategy: PreloadAllModules
        // })
        RouterModule.forRoot(ROUTES)
    ]
})
export class AppRoutingModule {
}
