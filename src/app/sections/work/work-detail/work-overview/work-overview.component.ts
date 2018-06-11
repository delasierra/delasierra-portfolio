import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkOverviewData} from '../../models/work-data.model';

@Component({
  selector:    'app-work-description',
  templateUrl: './work-overview.component.html',
  styleUrls:   ['./work-overview.component.scss']
})
export class WorkDescriptionComponent implements OnInit {

  @Input() generalData: WorkGeneralData;
  @Input() detailData: WorkOverviewData;

  constructor() { }

  ngOnInit() {
  }

}
