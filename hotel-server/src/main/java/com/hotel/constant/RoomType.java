package com.hotel.constant;

/**
 * RoomType
 *
 * @author suwen
 * @date 2020/6/14 下午8:19
 */
public enum RoomType {
  /** 小时房 */
  HOUR("小时房"),

  /** 天房 */
  DAY("天房"),

  /** 包月房 */
  MONTH("月房");

  private String name;

  RoomType(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public static RoomType parse(String value) {
    if (value == null) {
      return null;
    }

    switch (value) {
      case "小时房":
        return HOUR;
      case "天房":
        return DAY;
      case "月房":
        return MONTH;
      default:
        throw new IllegalArgumentException("客房类型不存在");
    }
  }
}
