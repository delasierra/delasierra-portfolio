import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getJsonTest()
        .subscribe(data => {
          console.log(data);
          // this.appData = data;
        });

  }
}
