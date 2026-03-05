import { Component } from '@angular/core';

@Component({ selector: 'app-user-dashboard', templateUrl: './user-dashboard.component.html', styleUrls: ['./user-dashboard.component.scss'], standalone: false })
export class UserDashboardComponent {
  cards = [
    { title: 'Wallet Balance', value: '₹52,480' },
    { title: 'Monthly Spend', value: '₹12,300' },
    { title: 'Rewards', value: '1,250 pts' }
  ];
}
