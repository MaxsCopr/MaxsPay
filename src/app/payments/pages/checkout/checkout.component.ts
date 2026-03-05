import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';

@Component({ selector: 'app-checkout', templateUrl: './checkout.component.html', standalone: false })
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  qrCode = 'UPI QR Placeholder';
  form = this.fb.group({ amount: [null, Validators.required], method: ['UPI', Validators.required], upiApp: ['Google Pay'], upiId: [''], bank: [''] });

  constructor(private paymentService: PaymentService, private router: Router) {}
  pay() { if (this.form.valid) this.paymentService.createPayment(this.form.getRawValue() as any).subscribe((status) => this.router.navigate(['/payments/status', status.transactionId])); }
}
