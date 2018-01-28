import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout.component';

import { RedirectIfNotLoggedIn, RedirectIfLoggedIn } from './services/auth';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [RedirectIfNotLoggedIn],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'transactions',
        loadChildren: './pages/transactions/transactions.module#TransactionsModule'
      },
      {
        path: 'my-card',
        loadChildren: './pages/my-card/my-card.module#MyCardModule'
      },
      {
        path: 'account-settings',
        loadChildren: './pages/account-settings/account-settings.module#AccountSettingsModule'
      },
      {
        path: 'wallet',
        loadChildren: './pages/wallet/wallet.module#WalletModule'
      },
      {
        path: 'explorer',
        loadChildren: './pages/explorer/explorer.module#ExplorerModule'
      },
      {
        path: 'contact',
        loadChildren: './pages/contact/contact.module#ContactModule'
      },
      {
        path: 'faqs',
        loadChildren: './pages/faqs/faqs.module#FaqsModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/login/login.module#LoginModule',
        canActivate: [RedirectIfLoggedIn],
      },
      {
        path: 'forgot-password',
        loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordModule',
        canActivate: [RedirectIfLoggedIn],
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
