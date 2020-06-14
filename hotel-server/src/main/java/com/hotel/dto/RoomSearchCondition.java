package com.hotel.dto;

import lombok.Data;

/**
 * RoomSearchCondition
 *
 * @author suwen
 * @date 2020/6/14 下午8:20
 */
@Data
public class RoomSearchCondition {
  private String roomNo;
  private String name;
  private String idCard;
  private String phoneNo;
}
