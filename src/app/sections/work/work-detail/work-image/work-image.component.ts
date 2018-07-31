import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WorkGeneralData, WorkImgData} from '../../models/work-data.model';
import {WorkService} from '../../work.service';

@Component({
    selector:    'app-work-image',
    templateUrl: './work-image.component.html',
    styleUrls:   ['./work-image.component.scss']
})
// export class WorkImageComponent implements AfterViewInit {
// export class WorkImageComponent implements OnInit, AfterViewInit {
export class WorkImageComponent implements OnInit {

    @Input() generalData: WorkGeneralData;
    @Input() detailData: WorkImgData;
    @Input() workId: string;


    images: Array<string>;

    constructor(private workService: WorkService) {

    }

    ngOnInit() {
        this.images = this.detailData.images;
    }

    getImagesFolder(): string {
        return this.workService.getImagePath(this.workId);
        // return this.workService.imgFolder + this.workId + '/';
    }
}
