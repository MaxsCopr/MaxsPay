import { Component } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Transaction } from '../../../models/transaction.model';

@Component({ selector: 'app-transaction-history', templateUrl: './transaction-history.component.html', standalone: false })
export class TransactionHistoryComponent {
  columns = ['id', 'amount', 'method', 'status', 'date'];
  transactions: Transaction[] = [];
  status = '';
  method = '';
  constructor(private paymentService: PaymentService) { this.load(); }
  load() { this.paymentService.getTransactionHistory({ status: this.status, method: this.method }).subscribe((data) => (this.transactions = data)); }
}
