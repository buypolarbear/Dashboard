import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedApi, SupportApi, AuthenticateApi, PricesApi } from '../services/api';
import { AuthService, RedirectIfLoggedIn, RedirectIfNotLoggedIn } from '../services/auth';
import { StateService } from '../services/state';
import { AppHttpInterceptorService } from '../services/interceptor';

import { EqualPasswordsValidator, EmailValidator } from '../validators';


const CORE_SERVICES = [
  SharedApi,
  SupportApi,
  AuthService,
  AuthenticateApi,
  PricesApi,
  StateService,
  AppHttpInterceptorService
];

const CORE_GUARDS = [
  RedirectIfLoggedIn,
  RedirectIfNotLoggedIn
];

const CORE_VALIDATORS = [
  EqualPasswordsValidator,
  EmailValidator
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        ...CORE_SERVICES,
        ...CORE_GUARDS,
        ...CORE_VALIDATORS
      ]
    };
  }
}
