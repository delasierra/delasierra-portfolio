import { Component, Input, OnInit } from '@angular/core';
import { WorkGeneralData } from '../../models/work-data.model';
import { WorkService } from '../../work.service';

@Component({
  selector: 'app-work-home',
  templateUrl: './work-home.component.html',
  styleUrls: ['./work-home.component.scss']
})
export class WorkHomeComponent implements OnInit {
  @Input()
  generalData: WorkGeneralData;
  @Input()
  workId: string;

  constructor(private workService: WorkService) {}

  ngOnInit() {
    // console.log('home step!', this.generalData);
  }

  getImagesFolder(): string {
    return this.workService.getImagePath(this.workId);
  }

  // getImage(size: string, dpi: string): string {
  //     console.log(this.workService.imgFolder + this.workId + '/' + dpi + size + '/');
  //     return this.workService.imgFolder + this.workId + '/' + dpi + size + '/';
  // }
}
