package com.hotel.constant;

import java.util.Objects;

/**
 * RoomStatus
 *
 * @author suwen
 * @date 2020/6/14 下午8:19
 */
public enum RoomStatus {
  /** 空房 */
  EMPTY(0),

  /** 入住中 */
  CHECKINGIN(1),

  /** 不可订 */
  UNUSED(2);

  private Integer code;

  RoomStatus(Integer code) {
    this.code = code;
  }

  public Integer getCode() {
    return this.code;
  }

  public static RoomStatus parse(Integer status) {
    if (Objects.isNull(status)) {
      return null;
    }
    switch (status) {
      case 0:
        return EMPTY;
      case 1:
        return CHECKINGIN;
      case 2:
        return UNUSED;
      default:
        throw new IllegalArgumentException("客房状态不存在");
    }
  }
}
