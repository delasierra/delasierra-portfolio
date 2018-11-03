import { Injectable } from '@angular/core';
import { ContactSectionDataModel, ContactUserInputsModel } from './contact-form-expandable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private http: HttpClient, private appService: AppService) {}

  sendEmailUrl = 'https://carlosdelasierra.com/backend/sendEmail.php';

  getContactData(): ContactSectionDataModel {
    return this.appService.getContactData();
  }

  sendEmail(contactUserInputsData: ContactUserInputsModel): Observable<any> {
    console.log('[sendEmail] contactUserInputsData', contactUserInputsData);
    return this.http.post(this.sendEmailUrl, contactUserInputsData, httpOptions);
  }
}
