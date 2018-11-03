import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactSectionDataModel, ContactUserInputsModel } from './contact-form-expandable.model';
import { ContactFormService } from './contact-form-expandable.service';

@Component({
  selector: 'app-contact-form-expandable',
  templateUrl: './contact-form-expandable.component.html',
  styleUrls: ['./contact-form-expandable.component.scss']
})
export class ContactFormExpandableComponent implements OnInit {
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

  isFormValid(form: any) {
    if (!form.valid) {
      return false;
    }
    return true;
  }

  onSubmit(formData: any) {
    const contactUserInputData: ContactUserInputsModel = formData.value;
    // console.log('form data', formData);
    // console.log('form constac user data', contactUserInputData);
    if (formData.valid) {
      this.contactFormService.sendEmail(contactUserInputData).subscribe(response => {
        console.log('response fromm server:', response);
        // if(response)
        // this.form.reset();
      });
    } else {
      console.log('form data is not valid');
    }
  }
}
