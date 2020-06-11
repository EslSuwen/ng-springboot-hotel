package com.hotel.service;

import com.hotel.entity.BookRoom;

import java.util.List;

/**
 * BookRoomService
 *
 * @author suwen
 * @date 2020/6/11 上午9:01
 */
public interface BookRoomService {

  /**
   * 增加订房信息
   *
   * @param bookRoom 订房信息
   * @author suwen
   * @date 2020/6/11 上午9:07
   */
  void addBookRoom(BookRoom bookRoom);

  /**
   * 获取所有订房信息
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:08
   */
  List<BookRoom> getAllBookRoom();

  /**
   * 根据身份证号获取所有订房信息
   *
   * @param idCard 身份证号
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:09
   */
  List<BookRoom> getBookRoomByIdCard(String idCard);

  /**
   * 获取待审核所有订房信息
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:10
   */
  List<BookRoom> getAuditBookRoom();

  /**
   * 根据id审核订房
   *
   * @param id id
   * @param status 状态
   * @author suwen
   * @date 2020/6/11 上午9:12
   */
  void auditBookRoom(Integer id, String status);
}
