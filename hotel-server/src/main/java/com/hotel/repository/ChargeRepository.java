package com.hotel.repository;

import com.hotel.entity.Bed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ChargeRepository
 *
 * @author suwen
 * @date 2020/6/14 下午8:22
 */
@Repository
public interface ChargeRepository extends JpaRepository<Bed, Integer> {}
