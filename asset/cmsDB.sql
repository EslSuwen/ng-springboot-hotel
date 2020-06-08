-- MySQL dump 10.13  Distrib 5.7.29, for osx10.13 (x86_64)
--
-- Host: localhost    Database: cmsDB
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bed`
--

DROP TABLE IF EXISTS `bed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `room_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK115cuh725wpbt8yxq2lvgg1c9` (`room_id`),
  CONSTRAINT `FK115cuh725wpbt8yxq2lvgg1c9` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bed`
--

LOCK TABLES `bed` WRITE;
/*!40000 ALTER TABLE `bed` DISABLE KEYS */;
INSERT INTO `bed` VALUES (7,'㕆','40*40','TWO_PEOPLE',1),(10,'㕆','40*40','TWO_PEOPLE',3),(11,'㕆','40*40','TWO_PEOPLE',4),(12,'㕆','40*40','TWO_PEOPLE',5),(13,'无','1.2*1.8','ONE_PEOPLE',2);
/*!40000 ALTER TABLE `bed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `charge`
--

DROP TABLE IF EXISTS `charge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `charge`
--

LOCK TABLES `charge` WRITE;
/*!40000 ALTER TABLE `charge` DISABLE KEYS */;
INSERT INTO `charge` VALUES (1,1,'9999-12-31 23:59:59.000000',88,'2020-06-02 20:09:33.000000','HOUR',1),(2,1,'9999-12-31 23:59:59.000000',128,'2020-06-02 20:09:48.000000','DAY',2),(3,1,'9999-12-31 23:59:59.000000',188,'2020-06-02 20:09:57.000000','HOUR',3),(4,1,'9999-12-31 23:59:59.000000',158,'2020-06-02 20:10:12.000000','DAY',4),(5,1,'9999-12-31 23:59:59.000000',168,'2020-06-02 20:10:19.000000','DAY',5);
/*!40000 ALTER TABLE `charge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(100) DEFAULT NULL,
  `id_card` varchar(18) NOT NULL,
  `name` varchar(80) NOT NULL,
  `phone_no` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'123','500112199809029481','张静怡','15178837030'),(2,'1234','500112199809029481','谢超','15178837030'),(3,'12332','500112199809029481','王杰','15178837030'),(4,'324123','500112199809029481','䴞用','15178837030'),(5,'123342','500112199809029481','雷婷','15178837030'),(6,'123432','500112199809029481','起亚','15178837030'),(7,'432123','500112199809029481','赵灿','15178837030'),(8,'无','500112199809294817','清哥','15788370320'),(9,'备注','500112199809294814','苏已','15178831234'),(10,'无','500112199809290','苏言','15178881234'),(11,'圥','500112199902020202','秦小姐','15112347893');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `income`
--

DROP TABLE IF EXISTS `income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `income` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `incoming` float DEFAULT NULL,
  `logout_date` datetime(6) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2cc035ihrupvgxdu7tomr671w` (`room_id`),
  CONSTRAINT `FK2cc035ihrupvgxdu7tomr671w` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income`
--

LOCK TABLES `income` WRITE;
/*!40000 ALTER TABLE `income` DISABLE KEYS */;
INSERT INTO `income` VALUES (1,88,'2020-06-30 19:55:42.000000',1),(2,188,'2020-06-30 19:55:42.000000',2),(3,189,'2020-06-30 19:55:42.000000',3),(4,128,'2020-06-30 19:55:42.000000',4),(5,6336,'2020-06-02 20:15:25.565000',1),(6,384,'2020-06-02 20:15:34.668000',2),(7,1152,'2020-06-02 20:41:31.794000',2),(8,7552,'2020-06-02 21:26:26.833000',2);
/*!40000 ALTER TABLE `income` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `check_in_date` datetime(6) DEFAULT NULL,
  `check_out_date` datetime(6) DEFAULT NULL,
  `room_no` varchar(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_mna8ilkl1xyq2j47tld36dbfy` (`room_no`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'2020-06-03 20:16:51.000000','2020-06-03 20:16:56.000000','101','CHECKINGIN','HOUR'),(2,NULL,NULL,'102','EMPTY','DAY'),(3,'2020-06-02 20:11:22.000000','2020-06-05 20:11:22.000000','103','EMPTY','HOUR'),(4,'2020-06-02 20:11:22.000000','2020-06-05 20:11:22.000000','104','EMPTY','DAY'),(5,'2020-06-02 20:11:22.000000','2020-06-05 20:11:22.000000','105','CHECKINGIN','DAY'),(6,NULL,NULL,'106','EMPTY','DAY'),(7,NULL,NULL,'107','EMPTY','DAY'),(8,NULL,NULL,'108','EMPTY','DAY'),(9,NULL,NULL,'109','EMPTY','MONTH'),(10,NULL,NULL,'110','EMPTY','MONTH'),(11,NULL,NULL,'201','EMPTY','HOUR'),(12,NULL,NULL,'202','EMPTY','HOUR'),(13,NULL,NULL,'203','EMPTY','HOUR'),(14,NULL,NULL,'204','EMPTY','DAY'),(15,NULL,NULL,'205','EMPTY','DAY'),(16,NULL,NULL,'206','EMPTY','DAY'),(17,NULL,NULL,'207','EMPTY','DAY'),(18,NULL,NULL,'208','EMPTY','DAY'),(19,NULL,NULL,'209','EMPTY','MONTH'),(20,NULL,NULL,'210','EMPTY','MONTH');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_customer`
--

DROP TABLE IF EXISTS `room_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room_customer` (
  `room_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  KEY `FKebsupy6ke345xf3fe7d9dfas1` (`customer_id`),
  KEY `FK5b7f843i37yh2og67tiv4wvr3` (`room_id`),
  CONSTRAINT `FK5b7f843i37yh2og67tiv4wvr3` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  CONSTRAINT `FKebsupy6ke345xf3fe7d9dfas1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_customer`
--

LOCK TABLES `room_customer` WRITE;
/*!40000 ALTER TABLE `room_customer` DISABLE KEYS */;
INSERT INTO `room_customer` VALUES (3,3),(3,4),(4,5),(5,8),(1,9);
/*!40000 ALTER TABLE `room_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(36) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `authority` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (101,'123456789@mail.com','Suwen','123456','15112345678','ROLE_ADMIN'),(102,'123456789@mail.com','Susie','123456','15112345678','ROLE_ADMIN'),(103,'123456789@mail.com','Lunafreya','123456','15112345678','ROLE_ADMIN'),(104,'123456789@mail.com','Lucy','123456','15112345678','ROLE_ADMIN'),(105,'123456789@mail.com','Frank','123456','15112345678','ROLE_ADMIN');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-04 19:19:33
