import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: '', loadChildren: () => import('./payments/payments.module').then((m) => m.PaymentsModule) },
  { path: '', loadChildren: () => import('./merchant/merchant.module').then((m) => m.MerchantModule) },
  { path: '', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: '', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
