import {Injectable} from '@angular/core';
import {ContactSectionData} from './contact-form.model';
import {AppService} from '../../app.service';

@Injectable({
    providedIn: 'root'
})
export class ContactFormService {

    constructor(private appService: AppService) {
    }

    getContactData(): ContactSectionData {
        return this.appService.getContactData();
    }
}
