import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkDetailComponent} from './work-detail/work-detail.component';
import {SECTION} from '../../models/routing.model';
import {WorkMenuComponent} from './work-menu/work-menu.component';

const routes: Routes = [
    {
        path:      '',
        // component: WorkComponent,
        component: WorkMenuComponent,
    },
    {
        path: SECTION.workDetails + '/:id',
        component: WorkDetailComponent,
    },
    {path: '**', component: WorkMenuComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {
}
