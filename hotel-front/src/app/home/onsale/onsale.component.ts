import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-onsale',
  templateUrl: './onsale.component.html',
  styleUrls: ['./onsale.component.scss']
})
export class OnsaleComponent implements OnInit {

  bookModel: any = {};

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.bookModel = this.authenticationService.getCurrentUserInfo();
  }


  setRoomNo(roomNo: number) {
    this.bookModel.roomNo = roomNo;
  }

  book() {
    console.log(this.bookModel);
  }

}
