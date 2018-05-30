import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkMenuComponent} from './work-menu/work-menu.component';

const routes: Routes = [
    {
        path:      '',
        component: WorkMenuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {
}
