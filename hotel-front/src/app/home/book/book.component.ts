import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Room} from '../../dto/Room';
import {Observable, Observer, Subject} from 'rxjs';
import {Customer} from '../../dto/Customer';
import {Utils} from '../../util/Utils';
import {RoomService} from '../../service/room.service';
import {CustomerService} from '../../service/customer.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../../service/authentication.service';
import {BookRoomService} from '../../service/book-room.service';
import {BookRoom} from '../../dto/BookRoom';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  currentUser = this.authenticationService.getCurrentUserInfo();

  idCardSelected: string;
  userList = [];
  userListSlice = [];

  validateForm: FormGroup;
  room: Room = new Room();
  rooms$: Observable<Room[]>;
  private searchTerms = new Subject<string>();

  submitForm($event) {
    $event.preventDefault();

    const customer = new Customer();
    const room = new Room();

    for (const key in this.validateForm.controls) {
      if (key === 'rangeDate') {
        const valueArray = this.validateForm.controls[key].value;
        room.checkInDate = Utils.isString(valueArray[0]) ? valueArray[0] : Utils.dateFormat(valueArray[0]);
        room.checkOutDate = Utils.isString(valueArray[1]) ? valueArray[1] : Utils.dateFormat(valueArray[1]);
      } else if (key === 'roomNo') {
        room.roomNo = this.validateForm.controls[key].value;
      } else {
        customer[key] = this.validateForm.controls[key].value;
      }

      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    room.customers = [];
    room.customers.push(customer);

    console.log(room);
    const user = this.authenticationService.getCurrentUserInfo();
    const bookRoom = new BookRoom();
    bookRoom.name = user.name;
    bookRoom.checkInDate = room.checkInDate;
    bookRoom.checkOutDate = room.checkOutDate;
    bookRoom.roomNo = room.roomNo;
    bookRoom.idCard = user.idCard;
    bookRoom.phoneNo = user.phone;
    bookRoom.comment = customer.comment;
    bookRoom.status = 'AUDITING';
    console.log(bookRoom);
    this.bookRoomService.addBookRoom(bookRoom).subscribe();
    /*this.roomService.login(room).subscribe((result) => {
      if (result !== undefined && result.success) {
        this.resetForm($event);
      }
    });*/

  }

  disabledDate = (current: Date): boolean => {
    const date = new Date();
    return current < Utils.getDate(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' 00:00:00');
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  idCardAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      /**身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X */
      const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (reg.test(control.value) === false) {
        observer.next({error: true, wrong: true});
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });

  phoneNoAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      /**手机号第1位肯定是1，第2位是3，4，5，7，8其中一个，剩余的9位在0-9之间*/
      const reg = /(^[1][3,4,5,7,8][0-9]{9}$)/;
      if (reg.test(control.value) === false) {
        observer.next({error: true, wrong: true});
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });


  onRoomNoChange() {
    this.room.roomNo = this.validateForm.controls['roomNo'].value;
    this.searchTerms.next(this.room.roomNo);
  }

  constructor(private fb: FormBuilder, private roomService: RoomService,
              private customerService: CustomerService,
              private authenticationService: AuthenticationService,
              private bookRoomService: BookRoomService) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      idCard: ['', [Validators.required], [this.idCardAsyncValidator]],
      roomNo: ['', [Validators.required]],
      phoneNo: ['', [Validators.required], [this.phoneNoAsyncValidator]],
      rangeDate: ['', [Validators.required]],
      comment: ['']
    });
  }

  ngOnInit() {
    this.validateForm.patchValue({idCard: this.currentUser.idCard, name: this.currentUser.name, phoneNo: this.currentUser.phone});
    this.rooms$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.roomService.searchRooms([{'key': 'roomNo', 'value': term}])),
    );
    this.rooms$.subscribe(rooms => {
      if (rooms != null && rooms.length === 1) {
        this.room = rooms[0];
      }
    });
    this.customerService.getUser().subscribe(result => {
      this.userList = result;
    });
  }

  searchIdCard(idCard: string) {
    this.userListSlice = this.userList.filter(each => each.idCard.indexOf(idCard) !== -1);
    if (this.userListSlice.length === 1) {
      console.log(this.userListSlice);
      this.validateForm.patchValue({name: this.userListSlice[0].name, phoneNo: this.userListSlice[0].phone});
    }
  }

}

