export class BookRoom {

  /** id */
  id: number;

  /** 入住日期 */
  checkInDate: string;

  /** 退房日期 */
  checkOutDate: string;

  /** 房间号 */
  roomNo: string;

  /** 姓名 */
  name: string;

  /** 身份证号 */
  idCard: string;

  /** 手机号 */
  phoneNo: string;

  /** 备注 */
  comment: string;

  /** 审核状态 */
  status: string;

  constructor() {
    this.checkInDate = '';
    this.checkOutDate = '';
    this.roomNo = '';
    this.name = '';
    this.idCard = '';
    this.phoneNo = '';
    this.comment = '';
    this.status = '';
  }
}
