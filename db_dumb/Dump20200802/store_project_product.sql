-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: store_project
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `category_id` int NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `image_url_UNIQUE` (`image_url`),
  KEY `category_product_idx` (`category_id`),
  CONSTRAINT `category_product` FOREIGN KEY (`category_id`) REFERENCES `category` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'apple',3,3,'images\\apple.jpg'),(7,'orange',5,3,'images\\orange.jpg'),(8,'banana',4,3,'images\\banana.jpg'),(9,'watermelon',7,3,'images\\watermelon.jpg'),(10,'chicken breast',12,2,'images\\chicken_breast.jpg'),(11,'pork chop',15,2,'images\\pork_chop.jpg'),(12,'chicken drumsticks',10,2,'images\\chicken_drumstick.jpg'),(13,'steak',20,2,'images\\steak.jpg'),(14,'tomato',2,1,'images\\tommato.jpg'),(15,'cabbage',1,1,'images\\cabbage.jpg'),(16,'broccoli',2,1,'images\\broccoli.jpg'),(17,'carrots',1,1,'images\\carrots.webp'),(18,'salmon filet',22,2,'images\\salmon.jpg'),(19,'eggpalnt',7,1,'images\\eggplant.jpg'),(20,'lemon',3,3,'images\\lemmon.jpg'),(21,'cucumber',1,1,'images\\cucumber.jpg'),(23,'grapes',4,3,'images\\grapes-white_181303-517.jpg'),(24,'lettuce',2,1,'images\\lettuce.jpg'),(25,'peaches',3,3,'images\\two_peach.jpg'),(26,'chicken wings',6,2,'images\\Raw-Chicken-Wings-On-Black.jpg'),(27,'whole chicken',18,2,'images\\whole_chicken.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-02 20:31:15
