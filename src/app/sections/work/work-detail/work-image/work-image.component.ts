import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WorkGeneralData, WorkImgData} from '../../models/work-data.model';

@Component({
    selector:    'app-work-image',
    templateUrl: './work-image.component.html',
    styleUrls:   ['./work-image.component.scss']
})
export class WorkImageComponent implements OnInit {

    @Input() generalData: WorkGeneralData;
    @Input() detailData: WorkImgData;
    @ViewChild('imagesContainer') imagesContainerEl: ElementRef;

    mobHeight: any;
    mobWidth: any;
    log: any;

    private images: Array<string>;

    constructor() {

    }

    ngOnInit() {
        this.images = this.detailData.images;


        this.mobHeight = (window.screen.height) + 'px';
        this.mobWidth = (window.screen.width) + 'px';
        console.log(this.mobHeight);
        console.log(this.mobWidth);
        this.log += this.mobWidth;
        this.log += this.imagesContainerEl.nativeElement.width;
    }

    // ngAfterViewInit() {
    //
    // }

    setImagePosition(index: number): object {
        return {
            'transform': 'translate(' + (index * -100) / (this.images.length + 1) + '%)'

        };
    }
}
