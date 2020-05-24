package com.hotel.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

/**
 * User 用户实体类
 *
 * @author suwen
 * @date 2020/5/24 下午3:06
 */
@Data
@Entity
@Table(name = "user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @Column(length = 20)
  private String name;

  @Column(length = 20)
  private String password;

  @Column(length = 20)
  private String phone;

  @Column(length = 36)
  private String email;
}
