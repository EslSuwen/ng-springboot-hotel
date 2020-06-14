package com.hotel.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * LogoutDto
 *
 * @author suwen
 * @date 2020/6/14 下午8:20
 */
@Data
@Builder
public class LogoutDto {
  private String roomNo;
  private String type;
  private String price;
  private String interval;
  private String sum;

  @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") // 入参
  @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss") // 出参
  private Date logoutDate;
}
