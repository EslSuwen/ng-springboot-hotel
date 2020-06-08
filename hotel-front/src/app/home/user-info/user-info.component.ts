import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
import {AuthenticationService} from '../../service/authentication.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 修改成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 修改失败的模态
  user: any;
  feedback = 0;
  isEdited = false;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.authenticationService.getCurrentUserInfo();
    this.userService.searchUser([]).subscribe(result => {
        console.log(result);
      }
    );
  }

  updateUserInfo() {

    this.userService.updateUser(this.user).subscribe(result => {
      if (result.success) {
        this.successModal.show();
      } else {
        this.failModal.show();
      }
    });
  }

  successUpdate() {

  }

  onEdit() {
    this.isEdited = true;
  }
}
