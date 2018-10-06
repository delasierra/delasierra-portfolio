import {Injectable} from '@angular/core';
import {WorkDataModel} from './models/work-data.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WorkService {

    // workCasesList: Array<WorkDataModel> = require('../../../assets/data/work-detail.json');
    // workCasesList: Array<WorkDataModel> = require('../../../assets/data/work-detail_2.json');
    workCasesList: Array<WorkDataModel> = require('../../../assets/data/work-detail_RELEASEv1.json');
    imgFolder = 'assets/work/';

    constructor() {
    }

    public getWorkCaseList(): Array<WorkDataModel> {
        return this.workCasesList;
    }

    public getWorkCaseData(id: string): WorkDataModel {
        let workcaseData: WorkDataModel;
        for (let i = 0; i < this.workCasesList.length; i++) {
            if (this.workCasesList[i].id === id) {
                workcaseData = this.workCasesList[i];
            }
        }
        return workcaseData;
    }

    public getImagePath(workId: string): string {
        return this.imgFolder + workId + '/';
    }
}
