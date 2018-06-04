import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkVideoData} from '../../work-data.model';

@Component({
  selector: 'app-work-video',
  templateUrl: './work-video.component.html',
  styleUrls: ['./work-video.component.scss']
})
export class WorkVideoComponent implements OnInit {

  @Input() generalData: WorkGeneralData;
  @Input() detailData: WorkVideoData;

  constructor() { }

  ngOnInit() {
  }

}
