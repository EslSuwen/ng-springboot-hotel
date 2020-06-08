package com.hotel.service.impl;

import com.hotel.entity.User;
import com.hotel.repository.UserRepository;
import com.hotel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * UserServiceImpl
 *
 * @author suwen
 * @date 2020/5/24 下午3:11
 */
@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public User getById(Integer id) {
    return userRepository.getOne(id);
  }

  @Override
  public User saveUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public User getUserByIdAndPassword(Integer id, String password) {
    User user = userRepository.getOne(id);
    return user.getPassword().equals(password) ? user : null;
  }

  @Override
  public List<User> getAll() {
    return userRepository.findAll();
  }

  @Override
  public void updateById(User user) {
    userRepository.save(user);
  }
}
