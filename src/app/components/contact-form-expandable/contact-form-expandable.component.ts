import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactSectionData, ContactUserInputs} from './contact-form-expandable.model';
import {ContactFormService} from './contact-form-expandable.service';


@Component({
  selector: 'app-contact-form-expandable',
  templateUrl: './contact-form-expandable.component.html',
  styleUrls: ['./contact-form-expandable.component.scss']
})
export class ContactFormExpandableComponent implements OnInit {

  data: ContactSectionData;
  showContactForm: boolean;
  user = {
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
