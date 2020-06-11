package com.hotel.service.impl;

import com.hotel.entity.BookRoom;
import com.hotel.repository.BookRoomRepository;
import com.hotel.service.BookRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * BookRoomServiceImpl
 *
 * @author suwen
 * @date 2020/6/11 上午9:01
 */
@Service
public class BookRoomServiceImpl implements BookRoomService {

  private final BookRoomRepository bookRoomRepository;

  @Autowired
  public BookRoomServiceImpl(BookRoomRepository bookRoomRepository) {
    this.bookRoomRepository = bookRoomRepository;
  }

  @Override
  public void addBookRoom(BookRoom bookRoom) {

    bookRoomRepository.save(bookRoom);
  }

  @Override
  public List<BookRoom> getAllBookRoom() {

    return bookRoomRepository.findAll();
  }

  @Override
  public List<BookRoom> getBookRoomByIdCard(String idCard) {

    return bookRoomRepository.getBookRoomByIdCard(idCard);
  }

  @Override
  public List<BookRoom> getAuditBookRoom() {

    return bookRoomRepository.getAuditBookRoom("AUDITING");
  }

  @Override
  public void auditBookRoom(Integer id, String status) {

    BookRoom bookRoom = bookRoomRepository.getOne(id);
    bookRoom.setStatus(status);
    bookRoomRepository.save(bookRoom);
  }
}
