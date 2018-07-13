import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkService} from '../work.service';
import {WorkDataModel} from '../models/work-data.model';
import {SECTION} from '../../../models/routing.model';

@Component({
    selector:    'app-work-detail',
    templateUrl: './work-detail.component.html',
    styleUrls:   ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {

    id: number;
    workCaseData: WorkDataModel;

    private HOME_ID = 'work-home';
    private OVERVIEW_ID = 'work-overview';
    private TEXT_ID = 'work-text';
    private IMAGE_ID = 'work-image';
    private IMAGE_TEXT_ID = 'work-image-text';
    private SLIDER_ID = 'work-slider';
    private VIDEO_ID = 'work-video';

    constructor(private route: ActivatedRoute,
                private router: Router,
                private workService: WorkService) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.workCaseData = this.workService.getWorkCaseData(this.id);
        // console.log(this.workCaseData);
    }

    closeWorkDetail(){
        this.router.navigate([SECTION.work]);
    }

    // getBackStyle(bg: string): string {
    //     return this.workService.getBackgroundStyle(bg);
    // }

//    Change header background color
}
