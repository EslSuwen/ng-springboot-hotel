package com.hotel.service.impl;

import com.hotel.entity.Authority;
import com.hotel.entity.User;
import com.hotel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.hotel.util.AuthorityUtil.createGrantedAuthorities;

/**
 * SpringBoot UserDetails 服务实现类
 *
 * @author suwen
 * @date 2020/2/26 下午12:20
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  private final UserRepository userRepository;

  @Autowired
  public UserDetailsServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
    User user = userRepository.getOne(Integer.parseInt(userId));
    List<Authority> authorities = new ArrayList<>();
    authorities.add(new Authority(1L, user.getAuthority()));
    user.setAuthorities(authorities);
    return create(user);
  }

  private static UserDetails create(User user) {
    return new org.springframework.security.core.userdetails.User(
        user.getId().toString(),
        user.getPassword(),
        createGrantedAuthorities(user.getAuthorities()));
  }
}
