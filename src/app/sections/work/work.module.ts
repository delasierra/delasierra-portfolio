import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkMenuComponent } from './work-menu/work-menu.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkDescriptionComponent } from './work-detail/work-overview/work-overview.component';
import { WorkTextComponent } from './work-detail/work-text/work-text.component';
import { WorkImageComponent } from './work-detail/work-image/work-image.component';
import { WorkImageTextComponent } from './work-detail/work-image-text/work-image-text.component';
import { WorkImageSliderComponent } from './work-detail/work-image-slider/work-image-slider.component';
import { WorkVideoComponent } from './work-detail/work-video/work-video.component';
import { WorkHomeComponent } from './work-detail/work-home/work-home.component';
import { WorkComponent } from './work.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CloseBtnComponent } from '../../components/close-btn/close-btn.component';
import { WorkMenuItemComponent } from './work-menu/work-menu-item/work-menu-item.component';
import { WorkMenuItem2Component } from './work-menu/work-menu-item2/work-menu-item2.component';
// import {ResponsiveModule} from 'ngx-responsive';
// import {ResponsiveImgComponent} from '../../components/responsive-img/responsive-img.component';
import { SharedModule } from '../../shared/shared.module';

library.add(faTimes);
library.add(faCircle);

const config = {
  breakPoints: {
    xs: { max: 539 },
    sm: { min: 540, max: 719 },
    md: { min: 720, max: 959 },
    lg: { min: 960, max: 1599 },
    xl: { min: 1600 }
  },
  debounceTime: 100
};

@NgModule({
  imports: [
    // CommonModule,
    WorkRoutingModule,
    FontAwesomeModule,
    SharedModule.forRoot()
    // ResponsiveModule.forRoot(config ),
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
    CloseBtnComponent,
    WorkMenuItemComponent,
    WorkMenuItem2Component
    // ResponsiveImgComponent,
    // BgStyleDirective,
    // WorkModule
  ],
  providers: []
})
export class WorkModule {}
