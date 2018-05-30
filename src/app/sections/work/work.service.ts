import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {WorkDataModel} from './work-data.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WorkService {

    // private dataUrl = 'http://csierrainteractive.com//delasierra/data-test.json'; // online dev
    private dataUrl = '/assets/data-test/work-detail.json'; // file

    constructor(private http: HttpClient) {
    }


    public getWorkCaseList(): Observable<WorkDataModel> {
        return this.http.get<WorkDataModel>(this.dataUrl);
        // return this.http.get(this.dataUrl);
    }

    // getWorkCase(id: number): object {
    //     const workList: Array<object> = this.getWorkCaseList();
    //     for (let i = 0; i < workList.length; i++) {
    //         // TODO get object from JSON
    //     }
    //     return null;
    // }
}
