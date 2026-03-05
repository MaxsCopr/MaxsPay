import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionHistoryComponent, canActivate: [AuthGuard] }
];

@NgModule({ declarations: [UserDashboardComponent, TransactionHistoryComponent], imports: [SharedModule, RouterModule.forChild(routes)] })
export class DashboardModule {}
