import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkImageTextData} from '../../work-data.model';

@Component({
  selector: 'app-work-image-text',
  templateUrl: './work-image-text.component.html',
  styleUrls: ['./work-image-text.component.scss']
})
export class WorkImageTextComponent implements OnInit {

  @Input() generalData: WorkGeneralData;
  @Input() detailData: WorkImageTextData;

  constructor() { }

  ngOnInit() {
  }

}
