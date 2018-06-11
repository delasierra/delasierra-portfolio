import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactSectionData, ContactUserInputs} from './contact-form.model';
import {ContactFormService} from './contact-form.service';

@Component({
    selector:    'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls:   ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


    private data: ContactSectionData;
    private user = {
        message: '',
        name:    '',
        email:   ''
    };

    @ViewChild('contactForm') private form: any;

    constructor(private contactFormService: ContactFormService) {
    }

    ngOnInit() {
        this.data = this.contactFormService.getContactData();
    }

    onSubmit({value, valid}: { value: ContactUserInputs, valid: boolean }): void {
        // console.log(value.email, value.name, value.message, valid);
        if (!valid) {
            console.log('form is not valid');
        } else {
            // TODO call API to send email and save user in DB
            // value.isActive = true;
            // value.registered = new Date();
            // value.hide = true;
            //
            //
            // this._userService.addUser(value);

            this.form.reset();
        }
    }
}
