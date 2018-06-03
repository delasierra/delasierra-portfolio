import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkService} from '../work.service';
import {WorkDataModel} from '../work-data.model';

@Component({
    selector:    'app-work-detail',
    templateUrl: './work-detail.component.html',
    styleUrls:   ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {

    private id: number;
    private workCaseData: WorkDataModel;

    constructor(private route: ActivatedRoute,
                private workService: WorkService) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.workCaseData = this.workService.getWorkCase(this.id)
        console.log(this.workCaseData);
    }

}
