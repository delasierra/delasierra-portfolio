import {Component, OnInit} from '@angular/core';
import {WorkService} from '../work.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkDataModel} from '../models/work-data.model';

@Component({
    selector:    'app-work-menu',
    templateUrl: './work-menu.component.html',
    styleUrls:   ['./work-menu.component.scss']
})
export class WorkMenuComponent implements OnInit {

    private workListData: Array<WorkDataModel>;

    constructor(private workService: WorkService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        // this.workService.getWorkCaseList()
        //     .subscribe(data => {
        //         this.workListData = data;
        //         console.log(this.workListData);
        //     });
        this.workListData = this.workService.getWorkCaseList();
        console.log(this.workListData);
    }

    // goToView(id: number) {
    //     this.router.navigate(['./detail', id], {relativeTo: this.route});
    // }

}
