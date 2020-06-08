package com.hotel.service;

import com.hotel.entity.User;

import java.util.List;

/**
 * UserService
 *
 * @author suwen
 * @date 2020/5/24 下午3:10
 */
public interface UserService {

  /**
   * 根据id查找用户
   *
   * @param id User Id
   * @return User
   * @author suwen
   * @date 2020/5/25 上午9:33
   */
  User getById(Integer id);

  /**
   * 保存用户
   *
   * @param user 用户
   * @return 执行结果
   * @author suwen
   * @date 2020/6/5 上午8:06
   */
  User saveUser(User user);

  /**
   * 根据用户id和密码查找用户
   *
   * @param id 用户id
   * @param password 用户密码
   * @return User
   * @author suwen
   * @date 2020/5/24 下午3:16
   */
  User getUserByIdAndPassword(Integer id, String password);

  /**
   * 获得所有用户信息
   *
   * @return List<User>
   * @author suwen
   * @date 2020/5/24 下午3:29
   */
  List<User> getAll();

  /**
   * 根据用户id更新用户信息
   *
   * @param user 新的用户信息
   * @author suwen
   * @date 2020/5/24 下午3:32
   */
  void updateById(User user);

  /**
   * 通过id修改密码
   *
   * @author suwen
   * @date 2020/6/8 20:14 下午
   * @param id 工号
   * @param oldPw 旧密码
   * @param newPw 新密码
   * @return 状态码
   */
  boolean updatePassword(Integer id, String oldPw, String newPw);
}
