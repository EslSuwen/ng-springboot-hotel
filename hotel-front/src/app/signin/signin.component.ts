import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../service/authentication.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @ViewChild('register', {static: true}) register: ModalComponent;
  @ViewChild('registered', {static: true}) registered: ModalComponent;
  @ViewChild('loginModal', {static: true}) loginModal: ModalComponent;


  validationForm: FormGroup;
  registerValidationForm: FormGroup;
  authModel: any = {};
  registerModel: any = {};
  imgUrl = `${environment.apiUrl}/api/createImageCode`;

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

  onSubmit() {
    // this.validationForm.controls.input.markAsTouched();
  }

  ngOnInit() {
    this.authenticationService.logout();

  }

  login() {
    this.loginModal.show();
    // this.router.navigate(['home']);
    /*    this.authenticationService.login(this.authModel.username, this.authModel.password, this.authModel.imgCode)
          .subscribe(result => {
            // 判断验证码是否输入正确
            this.username = this.authenticationService.getUserName();
            const judge = this.authenticationService.isLoggedIn();
            if (result) {
              // login successful
              if (judge) {

              } else {
                // 验证码输入错误
                alert('验证码错误');
              }

            } else {
              // login failed
              alert('Username or password is incorrect');
            }
          });*/
  }

  toRegister() {
    this.register.hide();
    this.registered.show();
  }


}
