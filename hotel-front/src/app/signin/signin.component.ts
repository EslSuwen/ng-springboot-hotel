import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {ModalComponent} from '../modal/modal.component';
import {User} from '../dto/user';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @ViewChild('register', {static: true}) register: ModalComponent;
  @ViewChild('registered', {static: true}) registered: ModalComponent;
  @ViewChild('loginModal', {static: true}) loginModal: ModalComponent;

  username: string;
  validationForm: FormGroup;
  registerValidationForm: FormGroup;
  authModel: any = {};
  registerModel = new User();

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.validationForm = fb.group({
      userFormEx: [null, [Validators.required]],
      passwordFormEx: [null, Validators.required],
    });
    this.registerValidationForm = fb.group({
      registerUserFormEx: [null, [Validators.required]],
      registerPasswordFormEx: [null, Validators.required],
      registerNameFormEx: [null, Validators.required],
      registerPhoneFormEx: [null, Validators.required],
      registerEmailFormEx: [null, Validators.required],
    });
  }

  get userFormEx() {
    return this.validationForm.get('userFormEx');
  }

  get passwordFormEx() {
    return this.validationForm.get('passwordFormEx');
  }

  get registerUserFormEx() {
    return this.registerValidationForm.get('registerUserFormEx');
  }

  get registerNameFormEx() {
    return this.registerValidationForm.get('registerNameFormEx');
  }

  get registerPasswordFormEx() {
    return this.registerValidationForm.get('registerPasswordFormEx');
  }

  get registerPhoneFormEx() {
    return this.registerValidationForm.get('registerPhoneFormEx');
  }

  get registerEmailFormEx() {
    return this.registerValidationForm.get('registerEmailFormEx');
  }


  ngOnInit() {
    this.username = this.authenticationService.getUserName();

  }

  login() {
    this.authenticationService.login(this.authModel.username, this.authModel.password).subscribe(result => {
      if (result) {
        this.username = this.authenticationService.getUserName();
        this.loginModal.show();
      } else {
        alert('账号或密码错误！');
      }
    });
  }

  toRegister() {
    this.register.hide();
    this.authenticationService.register(this.registerModel).subscribe(result => {
      if (result) {
        this.username = this.authenticationService.getUserName();
        this.registered.show();
      } else {
        alert('注册失败！');
      }
    });
    this.registered.show();
  }


}
