import { Component } from '@angular/core';

@Component({ selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.scss'], standalone: false })
export class SidebarComponent {
  navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Payments', route: '/payments/checkout', icon: 'payments' },
    { label: 'Transactions', route: '/transactions', icon: 'receipt_long' },
    { label: 'Merchant', route: '/merchant', icon: 'storefront' },
    { label: 'Admin', route: '/admin', icon: 'admin_panel_settings' }
  ];
}
