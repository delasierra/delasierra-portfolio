import {Component, OnInit} from '@angular/core';
import {AboutSectionData} from '../../models/app-data.model';
import {AppService} from '../../services/app.service';

@Component({
    selector:    'app-about',
    templateUrl: './about.component.html',
    styleUrls:   ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    data: AboutSectionData;

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.data = this.appService.getAboutData();
    }
}
