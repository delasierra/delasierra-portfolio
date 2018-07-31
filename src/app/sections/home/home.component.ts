import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {HomeSectionData} from '../../models/app-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  data: HomeSectionData;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.data = this.appService.getHomeData();
  }
}
