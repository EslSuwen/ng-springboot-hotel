import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {BookRoomService} from '../../service/book-room.service';
import {RoomService} from '../../service/room.service';
import {Customer} from '../../dto/Customer';
import {Room} from '../../dto/Room';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  auditData: any;


  constructor(private authenticationService: AuthenticationService,
              private bookRoomService: BookRoomService,
              private roomService: RoomService) {
  }

  ngOnInit(): void {

    this.bookRoomService.getAuditBookRoom().subscribe(
      result => {
        this.auditData = result.data;
      }
    );
  }

  auditPass(id: number) {
    this.bookRoomService.auditBookRoom(id, 'PASS').subscribe(
      result => {
        if (result.success) {
          this.auditData.map(each => {
            if (each.id === id) {
              this.login(each);
            }
          });
          this.auditData = this.auditData.filter(each => each.id !== id);
        }
      }
    );
  }

  auditFail(id: number) {
    this.bookRoomService.auditBookRoom(id, 'FAIL').subscribe(
      result => {
        if (result.success) {
          this.auditData = this.auditData.filter(each => each.id !== id);
        }
      }
    );
  }

  login(loginData: any) {
    console.log(loginData);
    const customer = new Customer();
    customer.comment = loginData.comment;
    customer.idCard = loginData.idCard;
    customer.name = loginData.name;
    customer.phoneNo = loginData.phoneNo;

    const room = new Room();
    room.roomNo = loginData.roomNo;
    room.checkInDate = loginData.checkInDate + ' 00:00:00';
    room.checkOutDate = loginData.checkOutDate + ' 00:00:00';

    room.customers = [];
    room.customers.push(customer);

    console.log(room);

    this.roomService.login(room).subscribe((result) => {
      if (result !== undefined && result.success) {
        alert('预定成功！');
      }
    });
  }
}
