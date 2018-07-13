import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkRoutingModule} from './work-routing.module';
import {WorkMenuComponent} from './work-menu/work-menu.component';
import {WorkDetailComponent} from './work-detail/work-detail.component';
import {WorkDescriptionComponent} from './work-detail/work-overview/work-overview.component';
import {WorkTextComponent} from './work-detail/work-text/work-text.component';
import {WorkImageComponent} from './work-detail/work-image/work-image.component';
import {WorkImageTextComponent} from './work-detail/work-image-text/work-image-text.component';
import {WorkImageSliderComponent} from './work-detail/work-image-slider/work-image-slider.component';
import {WorkVideoComponent} from './work-detail/work-video/work-video.component';
import {WorkHomeComponent} from './work-detail/work-home/work-home.component';
import { WorkComponent } from './work.component';
import {BgStyleDirective} from '../../directives/attributes/bg-style.directive';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {CloseBtnComponent} from '../../components/close-btn/close-btn.component';
import { WorkMenuItemComponent } from './work-menu/work-menu-item/work-menu-item.component';

library.add(faTimes);
library.add(faCircle);

@NgModule({
    imports:      [
        CommonModule,
        WorkRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [
        WorkMenuComponent,
        WorkHomeComponent,
        WorkDetailComponent,
        WorkDescriptionComponent,
        WorkTextComponent,
        WorkImageComponent,
        WorkImageTextComponent,
        WorkImageSliderComponent,
        WorkVideoComponent,
        WorkComponent,
        BgStyleDirective,
        CloseBtnComponent,
        WorkMenuItemComponent,
    ],
    providers:    [],
})
export class WorkModule {
}
