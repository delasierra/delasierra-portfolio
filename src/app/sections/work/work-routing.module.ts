import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkDetailComponent} from './work-detail/work-detail.component';
import {WorkComponent} from './work.component';
import {SECTION} from '../../models/routing.model';

const routes: Routes = [
    {
        path:      '',
        component: WorkComponent,
    },
    {
        path: SECTION.projectDetails,
        component: WorkDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {
}
