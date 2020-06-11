package com.hotel.controller;

import com.hotel.constant.RetCode;
import com.hotel.constant.ReturnCode;
import com.hotel.dto.BookRoomDto;
import com.hotel.dto.ResultDto;
import com.hotel.service.BookRoomService;
import com.hotel.util.Converters;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * BookRoomController
 *
 * @author suwen
 * @date 2020/6/11 上午9:06
 */
@Api(tags = "订房信息-控制器")
@RestController
@RequestMapping("/bookRoom")
public class BookRoomController {

  private final BookRoomService bookRoomService;

  @Autowired
  public BookRoomController(BookRoomService bookRoomService) {
    this.bookRoomService = bookRoomService;
  }

  /**
   * 增加订房信息
   *
   * @param bookRoomDto 订房信息
   * @author suwen
   * @date 2020/6/11 上午9:31
   */
  @PostMapping("/addBookRoom")
  public ResponseEntity<ResultDto> addBookRoom(@RequestBody BookRoomDto bookRoomDto) {

    bookRoomService.addBookRoom(Converters.Dto2BookRoom(bookRoomDto));

    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(ReturnCode.RETURN_CODE_10005.getCode())
            .message("增加订房信息")
            .build(),
        HttpStatus.OK);
  }

  /**
   * 获取所有订房信息
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:27
   */
  @GetMapping("/getAllBookRoom")
  public ResponseEntity<ResultDto> getAllBookRoom() {

    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(RetCode.RETCODE_20004)
            .message("查询到所有订房信息")
            .data(bookRoomService.getAllBookRoom().stream().map(Converters::BookRoom2Dto))
            .build(),
        HttpStatus.OK);
  }

  /**
   * 根据身份证号获取所有订房信息
   *
   * @param idCard 身份证号
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:27
   */
  @GetMapping("/getBookRoomByIdCard")
  public ResponseEntity<ResultDto> getBookRoomByIdCard(@RequestParam String idCard) {

    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(RetCode.RETCODE_20004)
            .message("查询到所有客人订房信息")
            .data(
                bookRoomService.getBookRoomByIdCard(idCard).stream().map(Converters::BookRoom2Dto))
            .build(),
        HttpStatus.OK);
  }

  /**
   * 获取待审核所有订房信息
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:29
   */
  @GetMapping("/getAuditBookRoom")
  public ResponseEntity<ResultDto> getAuditBookRoom() {

    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(RetCode.RETCODE_20004)
            .message("查询到所有待审核订房信息")
            .data(bookRoomService.getAuditBookRoom().stream().map(Converters::BookRoom2Dto))
            .build(),
        HttpStatus.OK);
  }

  /**
   * 根据id审核订房
   *
   * @param id id
   * @param status 状态
   * @author suwen
   * @date 2020/6/11 上午9:12
   */
  @PutMapping("/auditBookRoom")
  public ResponseEntity<ResultDto> auditBookRoom(
      @RequestParam Integer id, @RequestParam String status) {

    bookRoomService.auditBookRoom(id, status);
    return new ResponseEntity<>(
        ResultDto.builder().success(true).code(RetCode.RETCODE_20004).message("审核订房信息成功").build(),
        HttpStatus.OK);
  }
}
