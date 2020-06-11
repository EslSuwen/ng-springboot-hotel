package com.hotel.dto;

import lombok.Builder;
import lombok.Data;

/**
 * BookRoomDto
 *
 * @author suwen
 * @date 2020/6/11 上午9:51
 */
@Data
@Builder
public class BookRoomDto {

  /** id */
  private Integer id;

  /** 入住日期 */
  private String checkInDate;

  /** 退房日期 */
  private String checkOutDate;

  /** 房间号 */
  private String roomNo;

  /** 姓名 */
  private String name;

  /** 身份证号 */
  private String idCard;

  /** 手机号 */
  private String phoneNo;

  /** 备注 */
  private String comment;

  /** 审核状态 */
  private String status;
}
