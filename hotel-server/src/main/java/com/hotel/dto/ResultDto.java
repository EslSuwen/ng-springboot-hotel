package com.hotel.dto;

import lombok.Builder;
import lombok.Data;

/**
 * ResultDto
 *
 * @author suwen
 * @date 2020/6/14 下午8:20
 */
@Data
@Builder
public class ResultDto {
  /** 返回码 */
  private String code;

  /** 返回消息 */
  private String message;

  /** 是否成功 */
  private boolean success;

  /** 返回数据 */
  private Object data;
}
