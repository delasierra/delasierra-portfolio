/**
 * Created by csierra on 16/7/18.
 */
import {Injectable} from '@angular/core';
import {ContactSectionData} from './contact-form-expandable.model';
import {AppService} from '../../services/app.service';

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
