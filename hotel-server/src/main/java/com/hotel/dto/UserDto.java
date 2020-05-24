package com.hotel.dto;

import lombok.Builder;
import lombok.Data;

/**
 * UserDto 用户dto
 *
 * @author suwen
 * @date 2020/5/24 下午3:07
 */
@Data
@Builder
public class UserDto {

  private Integer id;

  private String name;

  private String password;

  private String phone;

  private String email;
}