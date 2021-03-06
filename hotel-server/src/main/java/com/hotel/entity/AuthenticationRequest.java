package com.hotel.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 验证请求接收模型
 *
 * @author suwen
 * @date 2020/2/26 下午12:20
 */
@Data
@ApiModel(description = "验证请求接收实体")
public class AuthenticationRequest {
  @ApiModelProperty(value = "用户账号", required = true)
  private String userId;

  @ApiModelProperty(position = 1, value = "用户密码", required = true)
  private String password;
}
