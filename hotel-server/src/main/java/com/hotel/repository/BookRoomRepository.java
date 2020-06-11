package com.hotel.repository;

import com.hotel.entity.BookRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * BookRoomRepository
 *
 * @author suwen
 * @date 2020/6/11 上午9:01
 */
@Repository
public interface BookRoomRepository extends JpaRepository<BookRoom, Integer> {

  /**
   * 根据身份证号查询订房信息
   *
   * @param idCard 身份证号
   * @return 订房信息
   * @author suwen
   * @date 2020/6/11 上午9:14
   */
  @Query("select h from BookRoom h where h.idCard like %:idCard%")
  List<BookRoom> getBookRoomByIdCard(@Param("idCard") String idCard);

  /**
   * 获取待审核所有订房信息
   *
   * @return 订房信息列表
   * @author suwen
   * @date 2020/6/11 上午9:19
   */
  @Query("select h from BookRoom h where h.status like %:status%")
  List<BookRoom> getAuditBookRoom(@Param("status") String status);
}
