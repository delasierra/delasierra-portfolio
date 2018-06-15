import {Component, Input, OnInit} from '@angular/core';
import {WorkGeneralData, WorkTextData} from '../../models/work-data.model';

@Component({
    selector:    'app-work-text',
    templateUrl: './work-text.component.html',
    styleUrls:   ['./work-text.component.scss']
})
export class WorkTextComponent implements OnInit {

    @Input() generalData: WorkGeneralData;
    @Input() detailData: WorkTextData;

    private bgColor: string;

    constructor() {
    }

    ngOnInit() {
        this.bgColor = this.detailData.background;
    }

    getTitleStyles(): object {
        return {
            'color':               this.getTitleColor(this.bgColor),
            'border-bottom-color': this.getTitleColor(this.bgColor),
            'text-align': this.detailData.position
        };
    }

    getParagraphStyles(): object {
        return {
            'color': this.getTParagraphColor(this.bgColor),
            'text-align': this.detailData.position
        };
    }

    getTitleColor(color: string): any {
        if (color === '#ffffff') {
            return this.generalData.mainColor;
        }
    }

    getTParagraphColor(color: string): any {
        if (color !== '#ffffff') {
            return '#ffffff';
        }
    }
}
