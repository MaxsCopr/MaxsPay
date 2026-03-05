import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({ selector: 'app-merchant-dashboard', templateUrl: './merchant-dashboard.component.html', standalone: false })
export class MerchantDashboardComponent {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { data: [120, 132, 101, 134, 90, 230, 210], label: 'Daily Transactions' },
      { data: [2200, 2800, 2100, 3100, 1900, 3800, 3400], label: 'Revenue (₹)' }
    ]
  };
}
