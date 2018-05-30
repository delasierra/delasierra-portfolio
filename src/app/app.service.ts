import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {WorkDataModel} from './sections/work/work-data.model';
import {HttpClient} from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AppService {

    private dataUrl = '/assets/data-test/work-detail.json'; // file

    constructor(private http: HttpClient) {
    }

    public getJsonTest(): Observable<WorkDataModel> {
        return this.http.get<WorkDataModel>(this.dataUrl);
    }
}
