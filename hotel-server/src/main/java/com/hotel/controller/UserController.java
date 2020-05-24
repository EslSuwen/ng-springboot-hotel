package com.hotel.controller;

import com.hotel.constant.RetCode;
import com.hotel.dto.ResultDto;
import com.hotel.entity.User;
import com.hotel.service.UserService;
import com.hotel.util.Converters;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用户信息控制器
 *
 * @author suwen
 * @date 2020/2/6 3:07 下午
 */
@Api(tags = "用户信息-控制器")
@RestController
@RequestMapping("/user")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  /**
   * 获取用户信息
   *
   * @return User 用户
   * @author suwen
   * @date 2020/2/6 3:10 下午
   */
  @GetMapping(value = "/getInfo")
  public ResponseEntity<ResultDto> getInfo(
      @ApiParam(value = "用户id", required = true) @RequestParam Integer id,
      @ApiParam(value = "用户密码", required = true) @RequestParam String password) {
    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(RetCode.RETCODE_20002)
            .message(RetCode.RETCODE_20002_MSG)
            .data(Converters.user2UserDto(userService.getUserByIdAndPassword(id, password)))
            .build(),
        HttpStatus.OK);
  }

  /**
   * 修改用户信息
   *
   * @param user 用户
   * @return java.lang.String 状态码
   * @author suwen
   * @date 2020/2/6 3:10 下午
   */
  @PostMapping(value = "/update")
  public String update(User user) {

    userService.updateById(user);
    return "";
  }

  /**
   * 获取所有用户信息
   *
   * @return List<User>
   * @author suwen
   * @date 2020/2/20 下午5:19
   */
  @GetMapping(value = "/getAllInfo")
  public List<User> getAllInfo() {
    return userService.getAll();
  }
}
