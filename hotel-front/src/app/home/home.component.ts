import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggleFlag = true;
  userName = '';

  onToggle() {
    this.toggleFlag = (this.toggleFlag === true) ? false : true;
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this.userName = this.authenticationService.getUserName();
    console.log(this.authenticationService.getCurrentUserInfo());
  }

  logout() {
  }

}
