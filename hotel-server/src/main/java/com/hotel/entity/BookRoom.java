package com.hotel.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * BookRoom 用户预定房间
 *
 * @author suwen
 * @date 2020/6/11 上午8:56
 */
@Data
@Entity
@Table(name = "book_room")
public class BookRoom {

  /** id */
  @Id
  @Column
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  /** 入住日期 */
  @Column private String checkInDate;

  /** 退房日期 */
  @Column private String checkOutDate;

  /** 房间号 */
  @Column(length = 20, unique = true)
  private String roomNo;

  /** 姓名 */
  @Column(nullable = false, length = 80)
  private String name;

  /** 身份证号 */
  @Column(nullable = false, length = 18)
  private String idCard;

  /** 手机号 */
  @Column(length = 11)
  private String phoneNo;

  /** 备注 */
  @Column(length = 100)
  private String comment;

  /** 审核状态 */
  @Column(nullable = false)
  private String status;
}
