package com.hotel.repository;

import com.hotel.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * CustomerRepository
 *
 * @author suwen
 * @date 2020/6/14 下午8:22
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
  /**
   * 根据条件查找客人
   *
   * @param name 客人姓名
   * @param phoneNo 手机号码
   * @param idCard 身份证编号
   * @return 客人列表
   */
  @Query(
      "select h from Customer h where h.name like %:name% and h.phoneNo like %:phoneNo% and h.idCard like %:idCard%")
  List<Customer> findCustomers(
      @Param("name") String name, @Param("phoneNo") String phoneNo, @Param("idCard") String idCard);

  /**
   * 根据身份证号查询客人信息
   *
   * @param idCard 身份证号
   * @return 客人信息
   */
  List<Customer> findCustomersByIdCard(String idCard);
}
