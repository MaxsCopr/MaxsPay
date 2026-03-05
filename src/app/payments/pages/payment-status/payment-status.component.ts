import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentStatus } from '../../../models/payment.model';
import { PaymentService } from '../../../services/payment.service';

@Component({ selector: 'app-payment-status', templateUrl: './payment-status.component.html', standalone: false })
export class PaymentStatusComponent {
  status?: PaymentStatus;
  constructor(private route: ActivatedRoute, private paymentService: PaymentService) {
    const id = this.route.snapshot.params['id'];
    this.paymentService.checkPaymentStatus(id).subscribe((res) => (this.status = res));
  }
}
