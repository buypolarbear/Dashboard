import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportApi } from '../../services/api';
import { AuthenticateApi } from '../../services/api';
import * as constants from '../../constants';

@Component({
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
  public contactForm: FormGroup;
  public company = constants.company;
  public contactFormPending: boolean = false;
  public contactFormSuccess: boolean = false;
  public contactFormError: string = null;

  constructor(private _supportApi: SupportApi, private _authApi: AuthenticateApi, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      'subject': ['', Validators.required],
      'message': ['', Validators.required],
    });
  }

  public sendContactEmail(contactData) {
    this.contactFormPending = true;
    this.contactFormSuccess = false;
    this.contactFormError = null;

    this._authApi.getUserData((userData) => {
      this._supportApi.sendContactEmail({
        email: userData.email,
        name: userData["https://moxy.one/user_metadata"].name,
        subject: contactData.subject,
        message: contactData.message
      }).subscribe(r => {
        this.contactFormSuccess = true;
        this.contactForm.reset();
      }, e => {
       this.contactFormError = e.json().error;
      }, () => {
        this.contactFormPending = false;
      });
    });
  }
}
