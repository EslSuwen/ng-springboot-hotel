package com.hotel.entity;

import com.hotel.constant.AuthorityName;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

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

  @Column(nullable = false, length = 20)
  private String name;

  @Column(nullable = false, length = 20)
  private String password;

  @Column(nullable = false, length = 20)
  private String phone;

  @Column(length = 36)
  private String email;

  @Column(nullable = false, length = 18)
  private String idCard;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private AuthorityName authority;

  @Transient private List<Authority> authorities;
}
