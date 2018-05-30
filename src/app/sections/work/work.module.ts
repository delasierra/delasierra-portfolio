import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkMenuComponent } from './work-menu/work-menu.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
  ],
  declarations: [WorkMenuComponent],
  providers:    [],
})
export class WorkModule { }
