package com.hotel.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * ChargeDto
 *
 * @author suwen
 * @date 2020/6/14 下午8:20
 */
@Data
public class ChargeDto {
  private Integer id;
  private String roomNo;
  private Integer count;
  private String timeUnit;
  private Float money;

  @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") // 入参
  @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss") // 出参
  private Date startDate;

  @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") // 入参
  @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss") // 出参
  private Date endDate;
}
