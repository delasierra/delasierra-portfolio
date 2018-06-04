import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData} from '../../work-data.model';

@Component({
    selector:    'app-work-home',
    templateUrl: './work-home.component.html',
    styleUrls:   ['./work-home.component.scss']
})
export class WorkHomeComponent implements OnInit {

    @Input() generalData: WorkGeneralData;

    constructor() {
    }

    ngOnInit() {
        console.log('home step!', this.generalData);
    }

}
