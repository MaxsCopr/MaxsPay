import { Component } from '@angular/core';

@Component({ selector: 'app-admin-dashboard', templateUrl: './admin-dashboard.component.html', standalone: false })
export class AdminDashboardComponent {
  columns = ['id', 'amount', 'method', 'status', 'date'];
  records = [{ id: 'TXN001', amount: 1200, method: 'UPI', status: 'SUCCESS', date: '2026-03-01' }];
}
