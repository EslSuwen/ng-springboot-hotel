package com.hotel.controller;

import com.hotel.constant.ReturnCode;
import com.hotel.dto.ResultDto;
import com.hotel.dto.UserDto;
import com.hotel.entity.AuthenticationRequest;
import com.hotel.entity.AuthenticationResponse;
import com.hotel.entity.User;
import com.hotel.service.UserService;
import com.hotel.util.Converters;
import com.hotel.util.JwtTokenUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * 用户验证控制器
 *
 * @author suwen
 * @date 2020/2/26 下午12:15
 */
@Api(tags = "用户验证-控制器")
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@Log4j2
public class AuthenticationController {

  private final JwtTokenUtil jwtTokenUtil;
  private final UserDetailsService userDetailsService;
  private final AuthenticationManager authenticationManager;
  private final UserService userService;

  @Autowired
  public AuthenticationController(
      AuthenticationManager authenticationManager,
      JwtTokenUtil jwtTokenUtil,
      @Qualifier("userDetailsServiceImpl") UserDetailsService userDetailsService,
      UserService userService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenUtil = jwtTokenUtil;
    this.userDetailsService = userDetailsService;
    this.userService = userService;
  }

  @ApiOperation(value = "用户验证", notes = "进行用户验证，成功返回 token,失败返回空。")
  @PostMapping("/login")
  public ResponseEntity<ResultDto> login(
      @NonNull @RequestBody AuthenticationRequest authRequest, HttpServletRequest request) {
    log.info(authRequest);

    Authentication authentication =
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                authRequest.getUserId(), authRequest.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUserId());
    String token = jwtTokenUtil.generate(userDetails);
    if (token == null) {
      return new ResponseEntity<>(
          ResultDto.builder()
              .success(false)
              .code(ReturnCode.RETURN_CODE_40002.getCode())
              .message(ReturnCode.RETURN_CODE_40002.getMessage())
              .data(new AuthenticationResponse())
              .build(),
          HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(ReturnCode.RETURN_CODE_10001.getCode())
            .message(ReturnCode.RETURN_CODE_10001.getMessage())
            .data(
                new AuthenticationResponse(
                    token,
                    Converters.user2UserDto(
                        userService.getById(Integer.parseInt(authRequest.getUserId())))))
            .build(),
        HttpStatus.OK);
  }

  @ApiOperation(value = "用户注册", notes = "进行用户注册，成功返回 token,失败返回空。")
  @PostMapping("/register")
  public ResponseEntity<ResultDto> register(@NonNull @RequestBody UserDto userDto) {
    log.info(userDto);

    User user = userService.saveUser(Converters.userDto2User(userDto));

    Authentication authentication =
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(user.getId(), user.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetails userDetails = userDetailsService.loadUserByUsername(user.getId().toString());
    String token = jwtTokenUtil.generate(userDetails);
    if (token == null) {
      return new ResponseEntity<>(
          ResultDto.builder()
              .success(false)
              .code(ReturnCode.RETURN_CODE_40002.getCode())
              .message("注册失败")
              .data(userDto)
              .build(),
          HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(
        ResultDto.builder()
            .success(true)
            .code(ReturnCode.RETURN_CODE_10001.getCode())
            .message(ReturnCode.RETURN_CODE_10001.getMessage())
            .data(new AuthenticationResponse(token, Converters.user2UserDto(user)))
            .build(),
        HttpStatus.OK);
  }
}
