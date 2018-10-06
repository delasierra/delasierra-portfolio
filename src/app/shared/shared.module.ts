import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ResponsiveModule} from 'ngx-responsive';
import {ResponsiveImgComponent} from '../components/responsive-img/responsive-img.component';

const config = {
  breakPoints: {
    xs: {max: 539},
    sm: {min: 540, max: 719},
    md: {min: 720, max: 959},
    lg: {min: 960, max: 1599},
    xl: {min: 1600}
  },
  debounceTime: 100
};

@NgModule({
  imports: [
    CommonModule,
    ResponsiveModule.forRoot(config),
  ],
  exports: [
    CommonModule,
    ResponsiveImgComponent,
    ResponsiveModule,
  ],
  declarations: [
      ResponsiveImgComponent,
    // ResponsiveModule.forRoot(config)
  ]
})
// export class SharedModule { }
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ResponsiveModule ]
    };
  }
}
