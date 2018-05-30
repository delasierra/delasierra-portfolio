import {Component, OnInit} from '@angular/core';
import {WorkDataModel} from '../work-data.model';
import {WorkService} from '../work.service';

@Component({
    selector:    'app-work-menu',
    templateUrl: './work-menu.component.html',
    styleUrls:   ['./work-menu.component.scss']
})
export class WorkMenuComponent implements OnInit {

    private workListData: WorkDataModel;

    constructor(private workService: WorkService) {
    }

    ngOnInit() {
        this.workService.getWorkCaseList()
            .subscribe(data => {
            this.workListData = data;
            console.log(this.workListData);
        });
    }

}
