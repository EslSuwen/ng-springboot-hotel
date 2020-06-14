package com.hotel.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Income
 *
 * @author suwen
 * @date 2020/6/14 下午8:21
 */
@Data
@Entity
@Table(name = "income")
public class Income implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @ManyToOne private Room room;

  @Column private Float incoming;

  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date logoutDate;
}
