import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AboutSectionData} from '../../models/app-data.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private data: AboutSectionData;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.data = this.appService.getAboutData();
  }
}
