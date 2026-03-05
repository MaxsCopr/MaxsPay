import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { AuthGuard } from '../core/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { MerchantDashboardComponent } from './pages/merchant-dashboard/merchant-dashboard.component';

const routes: Routes = [{ path: 'merchant', component: MerchantDashboardComponent, canActivate: [AuthGuard] }];

@NgModule({ declarations: [MerchantDashboardComponent], imports: [SharedModule, BaseChartDirective, RouterModule.forChild(routes)] })
export class MerchantModule {}
