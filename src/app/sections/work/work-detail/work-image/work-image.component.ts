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

    images: Array<string>;

    constructor() {

    }

    ngOnInit() {
        this.images = this.detailData.images;

        // this.mobHeight = (window.screen.height) + 'px';
        // this.imagesContainerWidth = (window.screen.width) + 'px';
        // console.log(this.mobHeight);
        // console.log(this.imagesContainerWidth);
        // this.log += this.imagesContainerWidth;
        // this.log += this.imagesContainerEl.nativeElement.width;
    }

    // TODO animate position of images when scrolling
    setImagePosition(index: number): object {
        // console.log(this.imagesContainerWidth);
        // console.log(this.detailData.images[index]);

        let styles: object;
        if (this.detailData.position === 'cover') {
            styles = {
                // 'height':           '100%',
                // 'width':            '100%',
                // 'opacity':          '.1',
                // 'background-image': 'url("' + this.detailData.images[index] + '")',
                // 'background-size':  'cover'
            };
        } else {
            styles = {
                // 'position': 'relative',
                // 'margin-left': '-' + (index * 100) / (this.images.length) + '%'
                // 'left': (index * 100) / (this.images.length) + 'px'
                // 'left': 'calc(' + (index * 100) / (this.images.length) + 'px)'
                // 'left': 'calc( 100vw - ' + (index * 100) / (this.images.length) + 'px)'
                // 'transform': 'translate(' + this.imagesContainerWidth / ((index * -100) / (this.images.length)) +
                // 'px)'
            };
        }
        return styles;
    }
}
