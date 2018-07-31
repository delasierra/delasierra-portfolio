import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkImageTextData, WorkImgData, WorkTextData} from '../../models/work-data.model';

@Component({
    selector:    'app-work-image-text',
    templateUrl: './work-image-text.component.html',
    styleUrls:   ['./work-image-text.component.scss']
})
export class WorkImageTextComponent implements OnInit {

    @Input() generalData: WorkGeneralData;
    @Input() detailData: WorkImageTextData;
    @Input() workId: string;

    constructor() {
    }

    ngOnInit() {
    }

    isEvenLayout(): boolean {
        return this.detailData.layout === 'even';
    }

    // Text component
    getTextLayout(): string {
        if (this.isEvenLayout()) {
            return 'col-md-6';
        } else {
            return 'col-md-4';
        }
    }

    getTextStyles(): WorkTextData {
        // let textStyles: WorkTextData;
        // textStyles.position = this.detailData.position;
        // textStyles.background = this.detailData.background;
        // textStyles.= this.detailData.background;
        return null;
    }

    // Images component
    getImagesLayout(): string {
        if (this.isEvenLayout()) {
            return 'col-md-6';
        } else {
            return 'col-md-8';
        }
    }

    getImageStyles(): any {
        // const images = this.detailData.images;
        // const position =
        const imgStyles: WorkImgData = {
            // position:   'center',
            position:   this.detailData.position,
            layout:   this.detailData.layout,
            background: this.detailData.background,
            images:     this.detailData.images,
            fx:         this.detailData.images.fx
        };
        // console.log(this.detailData.images);
        // return this.detailData;
        return imgStyles;
    }
}
