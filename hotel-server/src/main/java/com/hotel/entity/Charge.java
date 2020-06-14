package com.hotel.entity;

import com.hotel.constant.RoomType;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Charge
 *
 * @author suwen
 * @date 2020/6/14 下午8:21
 */
@Data
@Entity
@Table(name = "charge")
public class Charge implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  /** 客房 */
  @ManyToOne(optional = false)
  private Room room;

  /** 时间数量 */
  @Column private Integer count;

  /** 时间单位 */
  @Column
  @Enumerated(EnumType.STRING)
  private RoomType timeUnit;

  /** 金额(单位元) */
  @Column private float money;

  /** 起始日期 */
  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date startDate;

  /** 截止日期 */
  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date endDate;
}
