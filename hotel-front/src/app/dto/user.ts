// 用户个人信息类
export class User {
  // 工号
  id: number;
  // 用户姓名
  name: string;
  // 用户电话 String
  password: string;
  // 用户邮箱
  phone: string;
  // 密码
  email: string;
  // 权限（是否为管理员）
  authority: string;
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
