import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkDetailComponent} from './work-detail/work-detail.component';
import {WorkComponent} from './work.component';

const routes: Routes = [
    {
        path:      '',
        component: WorkComponent,
    },
    {
        path: 'detail/:id',
        component: WorkDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {
}
