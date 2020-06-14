package com.hotel.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Customer
 *
 * @author suwen
 * @date 2020/6/14 下午8:21
 */
@Getter
@Setter
@Entity
@Table(name = "customer")
public class Customer {
  /** id */
  @Id
  @Column
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  /** 姓名 */
  @Column(nullable = false, length = 80)
  private String name;

  /** 身份证号 */
  @Column(nullable = false, length = 18)
  private String idCard;

  /** 手机号 */
  @Column(length = 11)
  private String phoneNo;

  /** 房间 */
  @ManyToMany(cascade = CascadeType.REFRESH, mappedBy = "customers")
  private List<Room> rooms;

  @Column(length = 100)
  private String comment;
}
