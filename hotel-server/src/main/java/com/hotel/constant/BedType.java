package com.hotel.constant;

/**
 * BedType
 *
 * @author suwen
 * @date 2020/6/14 下午8:19
 */
public enum BedType {
  /** 三人床 */
  THREE_PEOPLE("三人床"),

  /** 双人床 */
  TWO_PEOPLE("双人床"),

  /** 单人床 */
  ONE_PEOPLE("单人床");

  private String name;

  BedType(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public static BedType parse(String name) {
    if (name == null) {
      return null;
    }
    switch (name) {
      case "三人床":
        return THREE_PEOPLE;
      case "双人床":
        return TWO_PEOPLE;
      case "单人床":
        return ONE_PEOPLE;
      default:
        throw new IllegalArgumentException("床类型不正确");
    }
  }
}
