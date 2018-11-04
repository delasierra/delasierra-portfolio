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
    if (formData.valid) {
      this.contactFormService.sendEmail(contactUserInputData).subscribe(response => {
        if (response.status === 'OK') {
          this.form.reset();
        } else {
          console.log(
            'TODO: create error handler UI for from not sent at [ContactFormExpandableComponent]'
          );
        }
      });
    } else {
      console.log('form data is not valid');
    }
  }
}
