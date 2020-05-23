// 用户个人信息类
export class User {
  // 工号
  uid: string;
  // 用户姓名
  uname: string;
  // 用户电话 String
  uphone: string;
  // 用户邮箱
  uemail: string;
  // 密码
  upassword: string;
  // 权限（是否为管理员）
  ulimit: number;
}


/**
 * 用户消息实体
 */
export class TeacherMsg {

  mid: number;

  uid: string;

  mtitle: string;

  mdate: string;

  mtext: string;

  mstatus: number;

  mresult: number;

}
