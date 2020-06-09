import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {SiderComponent} from './home/sider/sider.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './home/login/login.component';
import {LogoutComponent} from './home/logout/logout.component';
import {RoomNoSearchComponent} from './home/room-no-search/room-no-search.component';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './app-routing.module';
import {RoomManagementComponent} from './home/room-management/room-management.component';
import {CustomerManagementComponent} from './home/customer-management/customer-management.component';
import {RoomManagementBedComponent} from './home/room-management-bed/room-management-bed.component';
import {RoomManagementRoomComponent} from './home/room-management-room/room-management-room.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SigninComponent} from './signin/signin.component';
import {ModalComponent} from './modal/modal.component';
import {HomeComponent} from './home/home.component';
import {SideCardComponent} from './home/side-card/side-card.component';
import {MemberComponent} from './home/member/member.component';
import {UpdatePasswordComponent} from './home/update-password/update-password.component';
import {UserInfoComponent} from './home/user-info/user-info.component';
import {HasRoleDirective} from './auth/has-role.directive';
import { OnsaleComponent } from './home/onsale/onsale.component';
import { IndexComponent } from './home/index/index.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SiderComponent,
    LoginComponent,
    LogoutComponent,
    RoomNoSearchComponent,
    RoomManagementComponent,
    CustomerManagementComponent,
    RoomManagementBedComponent,
    RoomManagementRoomComponent,
    SigninComponent,
    ModalComponent,
    HomeComponent,
    SideCardComponent,
    MemberComponent,
    UpdatePasswordComponent,
    UserInfoComponent,
    HasRoleDirective,
    OnsaleComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
