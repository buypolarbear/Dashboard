import { Component, OnInit } from '@angular/core';
import { AuthenticateApi } from '../../services/api';
import { Router, ActivatedRoute } from '@angular/router';
import * as constants from '../../constants';
import { AuthService } from '../../services/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public pendingLogin: boolean = false;
  public loginError: any = null;
  public companyName: string = constants.company.name;
  public logo: string = constants.logos.light;
  private returnUrl: string;
  private defaultReturnUrl: string = '/dashboard';
  public loginForm: FormGroup;
  public logoutState: string;

  constructor(private _authenticateApi: AuthenticateApi, private fb: FormBuilder, private _authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.defaultReturnUrl;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['from']) {
        this.logoutState = params['from'];
        this.router.navigate(['/'], {queryParams: {}});
      }
    });
  }

  public submitLogin(loginData) {
    this.pendingLogin = true;
    this.loginError = null;
    this.logoutState = null;

    this._authenticateApi.loginUser({
      email: loginData.email,
      password: loginData.password
    }, (err, res) => {
      console.log(err, res);
      if(err) {
        this.loginError = err.description || "There was an error logging you in. Please try again.";
        this.pendingLogin = false;
      } else {
        this._authService.login(res, () => {
          this.router.navigate([this.returnUrl]);
        });
      }
    });
  }
}
