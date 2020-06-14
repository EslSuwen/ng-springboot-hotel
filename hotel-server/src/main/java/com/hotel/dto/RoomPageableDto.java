package com.hotel.dto;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;
import java.util.List;

/**
 * RoomPageableDto
 *
 * @author suwen
 * @date 2020/6/14 下午8:20
 */
@Data
public class RoomPageableDto {
  @Min(value = 1, message = "页码最小为1")
  @Pattern(regexp = "^\\d+$", message = "页码必须为整数")
  private int pageIndex;

  @Min(value = 1, message = "每页条目数量至少为1")
  @Pattern(regexp = "^\\d+$", message = "条目数量必须为整数")
  private int pageSize;

  private String sortKey;
  private String sortValue;

  private List<String> status;
}
