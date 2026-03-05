import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [{ path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] }];

@NgModule({ declarations: [AdminDashboardComponent], imports: [SharedModule, FormsModule, RouterModule.forChild(routes)] })
export class AdminModule {}
