import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './home/login/login.component';
import {LogoutComponent} from './home/logout/logout.component';
import {RoomManagementComponent} from './home/room-management/room-management.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {SigninComponent} from './signin/signin.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/home/roomManagement',
        pathMatch: 'full'
      },
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'roomManagement', component: RoomManagementComponent},
      {path: 'customerManagement', component: CustomerManagementComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
