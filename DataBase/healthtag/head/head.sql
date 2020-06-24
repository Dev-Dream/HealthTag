-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: healthtag
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES UTF8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `head`
--

DROP TABLE IF EXISTS `head`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `head` (
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tag` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `head`
--

LOCK TABLES `head` WRITE;
/*!40000 ALTER TABLE `head` DISABLE KEYS */;
INSERT INTO `head` VALUES ('감기','#발열#두통'),('결핵','#발열#두통#구토'),('과민성 대장 증후군','#두통#우울'),('녹내장','#두통#구토'),('뇌동맥류','#두통#구토#인지기능저하'),('뇌수막염','#발열#두통'),('뇌전증','#발작'),('뇌졸중','#두통#어지러움'),('당뇨병','#피로'),('류마티스 관절염','#피로'),('메니에르병','#구토#어지러움'),('모야모야병','#두통#구토#어지러움'),('백혈병','#발열#두통#피로#어지러움'),('식도염','#발열#구토'),('식중독 및 장염','#발열'),('심근경색증','#구토'),('심부전','#피로#우울'),('알츠하이머병','#우울#기억력감퇴#수면장애#인지기능저하'),('위경련','#구토#어지러움'),('인두통','#발열#두통#구토\n'),('인후염','#발열#두통'),('임파선염','#발열#피로'),('크론병','#발열'),('패혈증','#구토'),('편도염','#발열#두통#구토'),('폐렴','#발열#두통#피로#구토');
/*!40000 ALTER TABLE `head` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-06 16:28:02
