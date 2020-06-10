import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Customer} from '../../dto/Customer';
import {Room} from '../../dto/Room';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-onsale',
  templateUrl: './onsale.component.html',
  styleUrls: ['./onsale.component.scss']
})
export class OnsaleComponent implements OnInit {

  bookModel: any = {};

  constructor(private authenticationService: AuthenticationService, private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.bookModel = this.authenticationService.getCurrentUserInfo();
  }


  setRoomNo(roomNo: string) {
    this.bookModel.roomNo = roomNo;
  }

  book() {
    const customer = new Customer();
    customer.comment = this.bookModel.comment;
    customer.idCard = this.bookModel.idCard;
    customer.name = this.bookModel.name;
    customer.phoneNo = this.bookModel.phone;

    const room = new Room();
    room.roomNo = this.bookModel.roomNo;
    room.checkInDate = this.bookModel.checkInDate + ' 00:00:00';
    room.checkOutDate = this.bookModel.checkOutDate + ' 00:00:00';

    room.customers = [];
    room.customers.push(customer);

    console.log(this.bookModel);
    console.log(room);

    this.roomService.login(room).subscribe((result) => {
      if (result !== undefined && result.success) {
        alert('预定成功！');
      }
    });
  }

}
