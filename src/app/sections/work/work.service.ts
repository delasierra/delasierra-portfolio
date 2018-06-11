import {Injectable} from '@angular/core';
import {WorkDataModel} from './models/work-data.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WorkService {

    private workCasesList: Array<WorkDataModel> = require('../../../assets/data/work-detail.json');

    constructor() {
    }

    public getWorkCaseList(): Array<WorkDataModel> {
        return this.workCasesList;
    }

    public getWorkCaseData(id: number): WorkDataModel {
        let workcaseData: WorkDataModel;
        for (let i = 0; i < this.workCasesList.length; i++) {
            console.log(this.workCasesList[i].id);

            if (this.workCasesList[i].id == id) {
                workcaseData = this.workCasesList[i];
            }
        }
        return workcaseData;
    }
}
