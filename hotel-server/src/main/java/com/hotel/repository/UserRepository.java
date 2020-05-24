package com.hotel.repository;

import com.hotel.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * User repository
 *
 * @author suwen
 * @date 2020/5/24 下午3:08
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {}
