import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentStatusComponent } from './pages/payment-status/payment-status.component';

const routes: Routes = [
  { path: 'payments/checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'payments/status/:id', component: PaymentStatusComponent, canActivate: [AuthGuard] }
];

@NgModule({ declarations: [CheckoutComponent, PaymentStatusComponent], imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)] })
export class PaymentsModule {}
