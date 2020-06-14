package com.hotel.service.impl;

import com.hotel.repository.BedRepository;
import com.hotel.service.BedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * BedServiceImpl
 *
 * @author suwen
 * @date 2020/6/14 下午8:22
 */
@Service
public class BedServiceImpl implements BedService {
  @Autowired private BedRepository bedRepository;

  @Override
  public void delete(Integer id) {
    bedRepository.deleteById(id);
  }
}
