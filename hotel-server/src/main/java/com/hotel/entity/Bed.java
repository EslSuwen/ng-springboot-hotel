package com.hotel.entity;

import com.hotel.constant.BedType;
import lombok.Data;

import javax.persistence.*;

/**
 * Bed
 *
 * @author suwen
 * @date 2020/6/14 下午8:21
 */
@Data
@Entity
@Table(name = "bed")
public class Bed {
  /** id */
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  /** 床名 */
  @Column(length = 20)
  private String name;

  /** 型号 */
  @Column(length = 30)
  private String size;

  /** 所属房间 */
  @ManyToOne(optional = false)
  private Room room;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private BedType type;

  public Bed() {}
}
