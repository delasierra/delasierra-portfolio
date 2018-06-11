import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkImgData} from '../../models/work-data.model';

@Component({
  selector: 'app-work-image',
  templateUrl: './work-image.component.html',
  styleUrls: ['./work-image.component.scss']
})
export class WorkImageComponent implements OnInit {

  @Input() generalData: WorkGeneralData;
  @Input() detailData: WorkImgData;

  constructor() { }

  ngOnInit() {
  }

}
