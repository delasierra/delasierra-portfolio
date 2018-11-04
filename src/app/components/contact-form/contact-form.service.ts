import { Injectable } from '@angular/core';
import { ContactSectionDataModel, ContactUserInputsModel } from './contact-form.model';
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

  postsUrl = 'https://www.carlosdelasierra.com/backend/sendEmail.php';

  getContactData(): ContactSectionDataModel {
    return this.appService.getContactData();
  }

  sendEmail(contactUserInputsData: ContactUserInputsModel): Observable<any> {
    // userData.type = 'save';
    console.log('[ContactFormService] sendEmail');
    return this.http.put(this.postsUrl, contactUserInputsData, httpOptions);
  }
}
