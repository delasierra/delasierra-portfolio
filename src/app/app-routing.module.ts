import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './sections/home/home.component';
import {SECTION} from './models/routing.model';
import {AboutComponent} from './sections/about/about.component';
import {WorkModule} from './sections/work/work.module';
import {WorkMenuComponent} from './sections/work/work-menu/work-menu.component';
import {WorkDetailComponent} from './sections/work/work-detail/work-detail.component';

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
    //     path:         SECTION.workDetails,
    //     loadChildren: './sections/work/work.module#WorkDetailComponent',
    //     // component: WorkMenuComponent,
    // },

    // no lazy loading
    // {
    //     path:      SECTION.work,
    //     component: WorkComponent,
        // component: WorkMenuComponent,
    // },
    // {
    //     path: SECTION.workDetails + '/:id',
    //     component: WorkDetailComponent,
    // },
    // {
    //     path: SECTION.workDetails,
    //     component: WorkDetailComponent,
    // },
    {
        path:      SECTION.about,
        component: AboutComponent,
    },
    // {
    //     path:      SECTION.contact-form,
    //     component: ContactFormComponent,
    // },
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
