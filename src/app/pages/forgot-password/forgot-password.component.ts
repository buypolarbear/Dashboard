import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators';
import { AuthenticateApi } from '../../services/api';
import * as constants from '../../constants';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  public forgotPasswordForm: FormGroup;
  public pendingRequest: boolean = false;
  public passwordResetError: string = null;
  public passwordResetSuccess: boolean = false;
  public companyName: string = constants.company.name;
  public logo: string = constants.logos.light;

  constructor(private _authenticateApi: AuthenticateApi, private fb: FormBuilder) {
    this.forgotPasswordForm = fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])]
    });
  }

  public submitForgotPassword(forgotPasswordData) {
    this.pendingRequest = true;
    this.passwordResetError = null;
    this.passwordResetSuccess = false;
    this._authenticateApi.forgotPassword(forgotPasswordData.email, (err, res) => {
      if(err) {
        this.passwordResetError = err.description;
        this.pendingRequest = false;
      } else {
        this.pendingRequest = false;
        this.passwordResetSuccess = true;
        this.forgotPasswordForm.reset();
      }
    });
  }
}
