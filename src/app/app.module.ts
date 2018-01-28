import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app.routing';

import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout.component';

import { HttpInterceptorModule } from 'ng-http-interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    JsonpModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    SharedModule.forRoot(),
    HttpInterceptorModule
  ],
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    AuthLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
