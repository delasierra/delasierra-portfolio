import { Component, Input, OnInit } from '@angular/core';
import { WorkGeneralData, WorkImgData } from '../../models/work-data.model';
import { WorkService } from '../../work.service';

@Component({
  selector: 'app-work-image',
  templateUrl: './work-image.component.html',
  styleUrls: ['./work-image.component.scss']
})
export class WorkImageComponent implements OnInit {
  @Input()
  generalData: WorkGeneralData;
  @Input()
  detailData: WorkImgData;
  @Input()
  workId: string;

  images: Array<string>;

  constructor(private workService: WorkService) {}

  ngOnInit() {
    this.images = this.detailData.images;
  }

  getImagesFolder(): string {
    return this.workService.getImagePath(this.workId);
  }

  getBgColor(): any {
    const bgColor = this.detailData.background
      ? this.detailData.background
      : this.generalData.mainColor;
    return bgColor;
  }
}
