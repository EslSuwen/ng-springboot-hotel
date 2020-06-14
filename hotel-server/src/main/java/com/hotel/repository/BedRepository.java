package com.hotel.repository;

import com.hotel.entity.Bed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * BedRepository
 *
 * @author suwen
 * @date 2020/6/14 下午8:21
 */
@Repository
public interface BedRepository extends JpaRepository<Bed, Integer> {}
