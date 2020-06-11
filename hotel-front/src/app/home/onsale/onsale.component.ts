import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Customer} from '../../dto/Customer';
import {Room} from '../../dto/Room';
import {RoomService} from '../../service/room.service';
import {BookRoomService} from '../../service/book-room.service';
import {BookRoom} from '../../dto/BookRoom';

@Component({
  selector: 'app-onsale',
  templateUrl: './onsale.component.html',
  styleUrls: ['./onsale.component.scss']
})
export class OnsaleComponent implements OnInit {

  bookModel: any = {};
  bookRoom = new BookRoom;

  constructor(private authenticationService: AuthenticationService,
              private bookRoomService: BookRoomService,
              private roomService: RoomService) {
  }

  ngOnInit(): void {
    const user = this.authenticationService.getCurrentUserInfo();
    this.bookRoom.phoneNo = user.phone;
    this.bookRoom.name = user.name;
    this.bookRoom.idCard = user.idCard;
    this.bookRoom.status = 'AUDITING';
  }


  setRoomNo(roomNo: string) {
    this.bookRoom.roomNo = roomNo;
  }

  book() {
    console.log(this.bookRoom);
    this.bookRoomService.addBookRoom(this.bookRoom).subscribe();
  }

  book1() {
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

    /* this.roomService.login(room).subscribe((result) => {
       if (result !== undefined && result.success) {
         alert('预定成功！');
       }
     });*/
  }

}
