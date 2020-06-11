import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './home/login/login.component';
import {LogoutComponent} from './home/logout/logout.component';
import {RoomManagementComponent} from './home/room-management/room-management.component';
import {CustomerManagementComponent} from './home/customer-management/customer-management.component';
import {SigninComponent} from './signin/signin.component';
import {HomeComponent} from './home/home.component';
import {CanActivateAuthGuard} from './auth/can-activate.authguard';
import {UserInfoComponent} from './home/user-info/user-info.component';
import {UpdatePasswordComponent} from './home/update-password/update-password.component';
import {OnsaleComponent} from './home/onsale/onsale.component';
import {IndexComponent} from './home/index/index.component';
import {BookComponent} from './home/book/book.component';
import {AuditComponent} from './home/audit/audit.component';
import {MyBookComponent} from './home/my-book/my-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {
    path: 'home', component: HomeComponent,
    canActivate: [CanActivateAuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/home/index',
        pathMatch: 'full'
      },
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'roomManagement', component: RoomManagementComponent},
      {path: 'customerManagement', component: CustomerManagementComponent},
      {path: 'my-book', component: MyBookComponent},
      {path: 'updatepassword', component: UpdatePasswordComponent},
      {path: 'personalinfo', component: UserInfoComponent},
      {path: 'onsale', component: OnsaleComponent},
      {path: 'index', component: IndexComponent},
      {path: 'book', component: BookComponent},
      {path: 'audit', component: AuditComponent},



    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
