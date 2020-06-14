/*
 Navicat Premium Data Transfer

 Source Server         : ali_cloud
 Source Server Type    : MySQL
 Source Server Version : 50729
 Source Host           : 47.107.239.108:3306
 Source Schema         : cmsDB

 Target Server Type    : MySQL
 Target Server Version : 50729
 File Encoding         : 65001

 Date: 14/06/2020 21:18:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bed
-- ----------------------------
DROP TABLE IF EXISTS `bed`;
CREATE TABLE `bed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `room_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK115cuh725wpbt8yxq2lvgg1c9` (`room_id`),
  CONSTRAINT `FK115cuh725wpbt8yxq2lvgg1c9` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bed
-- ----------------------------
BEGIN;
INSERT INTO `bed` VALUES (7, '㕆', '40*40', 'TWO_PEOPLE', 1);
INSERT INTO `bed` VALUES (10, '㕆', '40*40', 'TWO_PEOPLE', 3);
INSERT INTO `bed` VALUES (11, '㕆', '40*40', 'TWO_PEOPLE', 4);
INSERT INTO `bed` VALUES (12, '㕆', '40*40', 'TWO_PEOPLE', 5);
INSERT INTO `bed` VALUES (13, '无', '1.2*1.8', 'ONE_PEOPLE', 2);
INSERT INTO `bed` VALUES (14, '大床', '2m*1.8m', 'TWO_PEOPLE', 21);
INSERT INTO `bed` VALUES (16, '大床', '2m*1.8m', 'TWO_PEOPLE', 23);
INSERT INTO `bed` VALUES (20, '大床', '2m*1.8m', 'TWO_PEOPLE', 21);
INSERT INTO `bed` VALUES (21, '大床', '2m*1.8m', 'TWO_PEOPLE', 21);
INSERT INTO `bed` VALUES (22, '双人床', '2m*2m', 'TWO_PEOPLE', 18);
INSERT INTO `bed` VALUES (25, '双人床', '2m*2m', 'TWO_PEOPLE', 25);
INSERT INTO `bed` VALUES (26, '', '', 'ONE_PEOPLE', 26);
INSERT INTO `bed` VALUES (27, '', '', 'ONE_PEOPLE', 26);
COMMIT;

-- ----------------------------
-- Table structure for book_room
-- ----------------------------
DROP TABLE IF EXISTS `book_room`;
CREATE TABLE `book_room` (
  `id` int(11) NOT NULL,
  `check_in_date` varchar(255) DEFAULT NULL,
  `check_out_date` varchar(255) DEFAULT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `id_card` varchar(18) NOT NULL,
  `name` varchar(80) NOT NULL,
  `phone_no` varchar(11) DEFAULT NULL,
  `room_no` varchar(20) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ntobweb5je347i3qtmtw13dkr` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book_room
-- ----------------------------
BEGIN;
INSERT INTO `book_room` VALUES (0, '2020-06-18', '2020-06-27', 'fa', '500112199809029481', 'Suwen', '15112345678', '豪华城景大床房', 'PASS');
INSERT INTO `book_room` VALUES (1, '2020-06-03', '2020-06-04', '无', '621024197908142703', 'Suwen', '15112345678', '雅致大床房', 'FAIL');
INSERT INTO `book_room` VALUES (3, '2020-06-03', '2020-06-04', '无', '500112199809029481', 'Suwen', '15112345678', '205', 'AUDITING');
INSERT INTO `book_room` VALUES (4, '2020-06-03', '2020-06-04', '无', '500112199809029481', 'Suwen', '15112345678', '206', 'AUDITING');
INSERT INTO `book_room` VALUES (14, '2020-06-12', '2020-06-13', 'fds', '500112199809029481', 'Suwen', '15112345678', '24', 'AUDITING');
INSERT INTO `book_room` VALUES (16, '2020-06-11 16:08:05', '2020-06-12 16:08:05', 'f111', '370829198005211015', 'Susie', '15112345678', '102', 'AUDITING');
INSERT INTO `book_room` VALUES (20, '2020-06-14', '2020-06-15', '无', '370829198005211015', 'Susie', '15112345678', '豪华亲子房', 'AUDITING');
COMMIT;

-- ----------------------------
-- Table structure for charge
-- ----------------------------
DROP TABLE IF EXISTS `charge`;
CREATE TABLE `charge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count` int(11) DEFAULT NULL,
  `end_date` datetime(6) DEFAULT NULL,
  `money` float DEFAULT NULL,
  `start_date` datetime(6) DEFAULT NULL,
  `time_unit` varchar(255) DEFAULT NULL,
  `room_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfxit8y5mblxuxslrfs3792g7k` (`room_id`),
  CONSTRAINT `FKfxit8y5mblxuxslrfs3792g7k` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of charge
-- ----------------------------
BEGIN;
INSERT INTO `charge` VALUES (1, 1, '9999-12-31 23:59:59.000000', 88, '2020-06-02 20:09:33.000000', 'HOUR', 1);
INSERT INTO `charge` VALUES (2, 1, '9999-12-31 23:59:59.000000', 128, '2020-06-02 20:09:48.000000', 'DAY', 2);
INSERT INTO `charge` VALUES (3, 1, '9999-12-31 23:59:59.000000', 188, '2020-06-02 20:09:57.000000', 'HOUR', 3);
INSERT INTO `charge` VALUES (4, 1, '9999-12-31 23:59:59.000000', 158, '2020-06-02 20:10:12.000000', 'DAY', 4);
INSERT INTO `charge` VALUES (5, 1, '9999-12-31 23:59:59.000000', 168, '2020-06-02 20:10:19.000000', 'DAY', 5);
INSERT INTO `charge` VALUES (6, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 21);
INSERT INTO `charge` VALUES (7, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 22);
INSERT INTO `charge` VALUES (8, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 22);
INSERT INTO `charge` VALUES (9, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 23);
INSERT INTO `charge` VALUES (10, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 24);
INSERT INTO `charge` VALUES (11, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 25);
INSERT INTO `charge` VALUES (13, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 18);
INSERT INTO `charge` VALUES (14, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 26);
INSERT INTO `charge` VALUES (15, 1, '9999-12-31 23:59:59.000000', 199, '2020-06-09 21:35:29.000000', 'DAY', 26);
INSERT INTO `charge` VALUES (16, 1, '9999-12-31 23:59:59.000000', 199, '2020-06-09 19:00:00.000000', 'DAY', 26);
INSERT INTO `charge` VALUES (17, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 19:00:00.000000', 'DAY', 24);
INSERT INTO `charge` VALUES (18, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-09 21:35:29.000000', 'DAY', 22);
INSERT INTO `charge` VALUES (19, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-14 08:15:22.000000', 'MONTH', 20);
INSERT INTO `charge` VALUES (20, 1, '9999-12-31 23:59:59.000000', 99, '2020-06-14 08:15:29.000000', 'MONTH', 19);
COMMIT;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(100) DEFAULT NULL,
  `id_card` varchar(18) NOT NULL,
  `name` varchar(80) NOT NULL,
  `phone_no` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
BEGIN;
INSERT INTO `customer` VALUES (1, '123', '500112299809029481', '张静怡', '15178837030');
INSERT INTO `customer` VALUES (2, '1234', '500112195509029481', '谢超', '15178837030');
INSERT INTO `customer` VALUES (3, '12332', '500112193809029481', '王杰', '15178837030');
INSERT INTO `customer` VALUES (4, '324123', '345001129809029481', '䴞用', '15178837030');
INSERT INTO `customer` VALUES (5, '123342', '220112199809029481', '雷婷', '15178837030');
INSERT INTO `customer` VALUES (6, '123432', '100112199809029481', '起亚', '15178837030');
INSERT INTO `customer` VALUES (7, '432123', '500333219980902948', '赵灿', '15178837030');
INSERT INTO `customer` VALUES (8, '无', '500112199809294817', '清哥', '15788370320');
INSERT INTO `customer` VALUES (9, '备注', '500112199809294814', '苏已', '15178831234');
INSERT INTO `customer` VALUES (10, '无', '500112199809290', '苏言', '15178881234');
INSERT INTO `customer` VALUES (11, '圥', '500112199902020202', '秦小姐', '15112347893');
INSERT INTO `customer` VALUES (14, '', '621024197908142703', 'Suwen', '15112345678');
INSERT INTO `customer` VALUES (15, 'fa', '500112199809029481', 'Suwen', '15112345678');
INSERT INTO `customer` VALUES (16, '地', '150430197608147743', 'Jack', '15112345678');
INSERT INTO `customer` VALUES (17, '无', '370829198005211015', 'Susie', '15112345678');
COMMIT;

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
BEGIN;
INSERT INTO `hibernate_sequence` VALUES (21);
COMMIT;

-- ----------------------------
-- Table structure for income
-- ----------------------------
DROP TABLE IF EXISTS `income`;
CREATE TABLE `income` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `incoming` float DEFAULT NULL,
  `logout_date` datetime(6) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2cc035ihrupvgxdu7tomr671w` (`room_id`),
  CONSTRAINT `FK2cc035ihrupvgxdu7tomr671w` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of income
-- ----------------------------
BEGIN;
INSERT INTO `income` VALUES (1, 88, '2020-06-30 19:55:42.000000', 1);
INSERT INTO `income` VALUES (2, 188, '2020-06-30 19:55:42.000000', 2);
INSERT INTO `income` VALUES (3, 189, '2020-06-30 19:55:42.000000', 3);
INSERT INTO `income` VALUES (4, 128, '2020-06-30 19:55:42.000000', 4);
INSERT INTO `income` VALUES (5, 6336, '2020-06-02 20:15:25.565000', 1);
INSERT INTO `income` VALUES (6, 384, '2020-06-02 20:15:34.668000', 2);
INSERT INTO `income` VALUES (7, 1152, '2020-06-02 20:41:31.794000', 2);
INSERT INTO `income` VALUES (8, 7552, '2020-06-02 21:26:26.833000', 2);
INSERT INTO `income` VALUES (9, 13536, '2020-06-10 04:14:13.007000', 3);
INSERT INTO `income` VALUES (10, 474, '2020-06-10 04:14:15.854000', 4);
INSERT INTO `income` VALUES (11, 99, '2020-06-11 03:22:57.676000', 22);
INSERT INTO `income` VALUES (12, 99, '2020-06-11 03:22:59.638000', 21);
INSERT INTO `income` VALUES (13, -1880, '2020-06-14 07:51:00.195000', 3);
INSERT INTO `income` VALUES (14, 128, '2020-06-14 07:52:34.531000', 2);
COMMIT;

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `check_in_date` datetime(6) DEFAULT NULL,
  `check_out_date` datetime(6) DEFAULT NULL,
  `room_no` varchar(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_mna8ilkl1xyq2j47tld36dbfy` (`room_no`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of room
-- ----------------------------
BEGIN;
INSERT INTO `room` VALUES (1, '2020-06-03 20:16:51.000000', '2020-06-03 20:16:56.000000', '101', 'CHECKINGIN', 'HOUR');
INSERT INTO `room` VALUES (2, NULL, NULL, '102', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (3, '2020-06-14 07:55:31.000000', '2020-06-14 08:55:35.000000', '103', 'CHECKINGIN', 'HOUR');
INSERT INTO `room` VALUES (4, NULL, NULL, '104', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (5, '2020-06-02 20:11:22.000000', '2020-06-05 20:11:22.000000', '105', 'CHECKINGIN', 'DAY');
INSERT INTO `room` VALUES (6, NULL, NULL, '106', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (7, NULL, NULL, '107', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (8, NULL, NULL, '108', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (9, NULL, NULL, '109', 'EMPTY', 'MONTH');
INSERT INTO `room` VALUES (10, NULL, NULL, '110', 'EMPTY', 'MONTH');
INSERT INTO `room` VALUES (11, NULL, NULL, '201', 'EMPTY', 'HOUR');
INSERT INTO `room` VALUES (12, NULL, NULL, '202', 'EMPTY', 'HOUR');
INSERT INTO `room` VALUES (13, NULL, NULL, '203', 'EMPTY', 'HOUR');
INSERT INTO `room` VALUES (14, NULL, NULL, '204', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (15, NULL, NULL, '205', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (16, NULL, NULL, '206', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (17, NULL, NULL, '207', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (18, NULL, NULL, '208', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (19, NULL, NULL, '209', 'EMPTY', 'MONTH');
INSERT INTO `room` VALUES (20, NULL, NULL, '210', 'EMPTY', 'MONTH');
INSERT INTO `room` VALUES (21, '2020-06-17 11:00:00.000000', '2020-06-26 11:00:00.000000', '豪华城景大床房', 'CHECKINGIN', 'DAY');
INSERT INTO `room` VALUES (22, NULL, NULL, '豪华山景大床房', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (23, NULL, NULL, '豪华江景大床房', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (24, NULL, NULL, '雅致大床房', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (25, NULL, NULL, '摩天景观房', 'EMPTY', 'DAY');
INSERT INTO `room` VALUES (26, '2020-06-13 11:00:00.000000', '2020-06-14 11:00:00.000000', '豪华亲子房', 'CHECKINGIN', 'DAY');
COMMIT;

-- ----------------------------
-- Table structure for room_customer
-- ----------------------------
DROP TABLE IF EXISTS `room_customer`;
CREATE TABLE `room_customer` (
  `room_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  KEY `FKebsupy6ke345xf3fe7d9dfas1` (`customer_id`),
  KEY `FK5b7f843i37yh2og67tiv4wvr3` (`room_id`),
  CONSTRAINT `FK5b7f843i37yh2og67tiv4wvr3` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  CONSTRAINT `FKebsupy6ke345xf3fe7d9dfas1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of room_customer
-- ----------------------------
BEGIN;
INSERT INTO `room_customer` VALUES (5, 8);
INSERT INTO `room_customer` VALUES (1, 9);
INSERT INTO `room_customer` VALUES (21, 15);
INSERT INTO `room_customer` VALUES (3, 17);
INSERT INTO `room_customer` VALUES (26, 17);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(36) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `authority` varchar(255) NOT NULL,
  `id_card` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (7, 'email@email.com', 'Suwen', '123456', '15112345678', 'ROLE_ADMIN', '621024197908142703');
INSERT INTO `user` VALUES (9, 'email@email.com', 'Jack', '123456', '15112345678', 'ROLE_ADMIN', '150430197608147743');
INSERT INTO `user` VALUES (10, 'email@email.com', 'Jack', '123456', '15112345678', 'ROLE_ADMIN', '150430156456477433');
INSERT INTO `user` VALUES (11, 'email@email.com', 'Jack', '123456', '15112345678', 'ROLE_ADMIN', '500112199809029485');
INSERT INTO `user` VALUES (101, 'esllovens@gmail.com', 'Suwen', '123456', '15112345678', 'ROLE_ADMIN', '500112199809029481');
INSERT INTO `user` VALUES (102, '123455232@mail.com', 'Susie', '123456', '15112345678', 'ROLE_USER', '370829198005211015');
INSERT INTO `user` VALUES (103, '123456789@mail.com', 'Lunafreya', '123456', '15112345678', 'ROLE_ADMIN', '500112199809029483');
INSERT INTO `user` VALUES (104, '123456789@mail.com', 'Lucy', '123456', '15112345678', 'ROLE_ADMIN', '500112199809029484');
INSERT INTO `user` VALUES (105, '123456789@mail.com', 'Frank', '123456', '15112345678', 'ROLE_ADMIN', '500112199809029485');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
