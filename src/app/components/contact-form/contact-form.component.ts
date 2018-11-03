import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactSectionDataModel, ContactUserInputsModel } from './contact-form.model';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  data: ContactSectionDataModel;
  showContactForm: boolean;
  user = {
    message: '',
    name: '',
    email: ''
  };

  @ViewChild('contactForm')
  private form: any;

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit() {
    this.data = this.contactFormService.getContactData();
  }

  onSubmit({
    contactUserInputsData,
    valid
  }: {
    contactUserInputsData: ContactUserInputsModel;
    valid: boolean;
  }): void {
    console.log('onSubmit');
    console.log(
      contactUserInputsData.email,
      contactUserInputsData.name,
      contactUserInputsData.message,
      valid
    );
    if (!valid) {
      console.log('form is not valid');
    } else {
      console.log('form is valid, ready to send');
      // TODO call API to send email and save user in DB
      // value.isActive = true;
      // value.registered = new Date();
      // value.hide = true;
      //
      //
      // this._userService.addUser(value);
      this.contactFormService.sendEmail(contactUserInputsData).subscribe(response => {
        // this.goNextStep(response);
        console.log('response fromm server:', response);
        this.form.reset();
      });
    }
  }
}
