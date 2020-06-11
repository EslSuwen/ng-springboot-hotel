import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {BookRoomService} from '../../service/book-room.service';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.scss']
})
export class MyBookComponent implements OnInit {

  data: any;

  constructor(private authenticationService: AuthenticationService,
              private bookRoomService: BookRoomService,
              private roomService: RoomService) {
  }

  ngOnInit(): void {

    console.log(this.authenticationService.getCurrentUserInfo().idCard);
    this.bookRoomService.getBookRoomByIdCard(this.authenticationService.getCurrentUserInfo().idCard).subscribe(
      result => {
        this.data = result.data;
      }
    );
  }

}
