import {Injectable} from '@angular/core';
import {WorkDataModel} from './work-data.model';

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

    // public getWorkCaseList(): Observable<WorkDataModel> {
    //     this.workListObs = this.http.get<WorkDataModel>(this.dataUrl);
    //     return this.workListObs;
    //     // return this.http.get(this.dataUrl);
    // }

    public getWorkCase(id: number): WorkDataModel {
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
