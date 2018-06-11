import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkSliderData} from '../../models/work-data.model';

@Component({
  selector: 'app-work-image-slider',
  templateUrl: './work-image-slider.component.html',
  styleUrls: ['./work-image-slider.component.scss']
})
export class WorkImageSliderComponent implements OnInit {

  @Input() generalData: WorkGeneralData;
  @Input() detailData: WorkSliderData;

  constructor() { }

  ngOnInit() {
  }

}
