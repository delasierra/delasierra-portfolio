import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkTextData} from '../../models/work-data.model';

@Component({
  selector: 'app-work-text',
  templateUrl: './work-text.component.html',
  styleUrls: ['./work-text.component.scss']
})
export class WorkTextComponent implements OnInit {

  @Input() generalData: WorkGeneralData;
  @Input() detailData: WorkTextData;

  constructor() { }

  ngOnInit() {
  }

}
