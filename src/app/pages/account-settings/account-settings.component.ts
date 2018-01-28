import { Component } from '@angular/core';
import { AuthenticateApi } from '../../services/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators';

@Component({
  templateUrl: 'account-settings.component.html'
})
export class AccountSettingsComponent {
  public userData: any;
  public userDataForm: FormGroup;
  public passwordForm: FormGroup;
  public changePasswordPending: boolean = false;
  public changePasswordError: string;
  public changePasswordSuccess: string;
  public changeEmailSuccess: boolean = null;
  public changeEmailError:boolean = null;
  public changeEmailPending:boolean = false;
  public supportedCountries: any;

  constructor(private _authApi: AuthenticateApi, private fb: FormBuilder) {
    this.getUserData();
    this.supportedCountries = _authApi.getSupportedCountries();
  }

  private setupEmailForm() {
    this.userDataForm = this.fb.group({
      'email': [this.userData.email, Validators.compose([Validators.required, EmailValidator.validate])],
      'fullName': [this.userData["https://moxy.one/user_metadata"].name, Validators.compose([Validators.required])],
      'resAddress': [this.userData["https://moxy.one/user_metadata"].address, Validators.compose([Validators.required])],
      'country': [this.userData["https://moxy.one/user_metadata"]["country-name"], Validators.compose([Validators.required])],
    });
  }

  public getUserData() {
    this._authApi.getUserData((userData) => {
      this.userData = userData;
      this.setupEmailForm();
    });
  }

  public updateUserEmail(emailFormData) {
    this.changeEmailSuccess = null;
    this.changeEmailError = null;
    this.changeEmailPending = true;

    this._authApi.changeUserEmail(emailFormData).subscribe(r => {
      this.changeEmailSuccess = r.json().message;
      this.changeEmailPending = false;
    }, e => {
      this.changeEmailError = e.json().message;
      this.changeEmailPending = false;
    })
  }

  public requestPasswordChange() {
    this.changePasswordPending = true;
    this.changePasswordError = null;
    this.changePasswordSuccess = null;

    this._authApi.changeUserPassword((err) => {
      this.changePasswordPending = false;

      if(err) {
        this.changePasswordError = "There was an error requesting a password change. Please try again later.";
      } else {
        this.changePasswordSuccess = "Please click on the link we sent to your email address to change your password.";
        this.passwordForm.reset();
      }
    });
  }
}
