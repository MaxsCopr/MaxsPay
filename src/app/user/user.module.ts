import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [{ path: 'user', component: UserProfileComponent, canActivate: [AuthGuard] }];

@NgModule({ declarations: [UserProfileComponent], imports: [SharedModule, RouterModule.forChild(routes)] })
export class UserModule {}
