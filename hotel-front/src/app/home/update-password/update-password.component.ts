import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 修改成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 修改失败的模态
  oldPw = '';
  newPw = '';
  newPw1: '';
  feedback = 2;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              public router: Router) {
  }

  ngOnInit() {

  }

  // 判断更改的两次密码是否相同
  isSamePwd() {
    return this.newPw === this.newPw1;
  }

  updatePassword() {
    if (!this.isSamePwd) {
      alert('两次输入的密码不相同');
    } else {
      this.userService.updatePassword(this.authenticationService.getUserId(), this.oldPw, this.newPw).subscribe(result => {
        if (result.success) {
          this.showAndHideModal_success();

        } else {
          this.showAndHideModal_fail();
        }
      });
    }
  }

  showAndHideModal_success() {   // 显示修改成功的模态
    this.successModal.show();
  }

  showAndHideModal_fail() {   // 登录修改显示的模态
    this.failModal.show();
  }


  successUpdate() {  // 输入正确，确认进入
    this.router.navigate(['/']);
  }

}
