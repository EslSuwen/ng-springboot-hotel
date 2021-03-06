package com.hotel.constant;

/**
 * ReturnCode http 返回码
 *
 * @author suwen
 * @date 2020/5/25 上午9:00
 */
public enum ReturnCode {
  /** 成功 */
  RETURN_CODE_10001("10001", "登录成功"),
  RETURN_CODE_20001("20001", "登记成功"),
  RETURN_CODE_10002("20002", "退房成功"),
  RETURN_CODE_10003("20003", "登录成功"),
  RETURN_CODE_10004("20004", "更新成功"),
  RETURN_CODE_10005("20005", "新增成功"),

  /** 客户端错误 */
  RETURN_CODE_40001("40001", "不存在该账号"),
  RETURN_CODE_40002("40002", "密码错误"),
  RETURN_CODE_40003("40003", "客户端错误"),

  /** 客房状态错误消息 */
  RETURN_CODE_40004("40004", "客房状态错误消息"),
  RETURN_CODE_40005("40005", "客房状态错误消息"),
  RETURN_CODE_40006("40006", "客房状态错误消息"),
  RETURN_CODE_40007("40007", "客房状态错误消息"),
  RETURN_CODE_40008("40008", "客房状态错误消息"),
  RETURN_CODE_40009("40009", "客房状态错误消息"),
  RETURN_CODE_40010("40010", "客房状态错误消息"),
  RETURN_CODE_40011("40011", "客房状态错误消息"),
  RETURN_CODE_40012("40012", "客房状态错误消息"),
  RETURN_CODE_40013("40013", "客房状态错误消息"),
  RETURN_CODE_40014("40014", "客房状态错误消息"),
  RETURN_CODE_40015("40015", "客房状态错误消息"),
  RETURN_CODE_40016("40016", "客房状态错误消息"),
  RETURN_CODE_40017("40017", "客房状态错误消息"),
  RETURN_CODE_40018("40018", "客房状态错误消息"),
  RETURN_CODE_40099("40099", "客房状态错误消息"),

  /** 服务端错误 */
  RETURN_CODE_50001("50001", "服务端错误");


  private final String code;
  private final String message;

  ReturnCode(String code, String message) {
    this.code = code;
    this.message = message;
  }

  public String getCode() {
    return this.code;
  }

  public String getMessage() {
    return this.message;
  }
}
