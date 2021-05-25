-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sensoriale_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

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
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_28cdb48c-655c-45ab-a257-a8f5c2b76634` (`userId`),
  KEY `FK_476ae8d1-15d8-45e0-8f58-3bd10ba8031e` (`productId`),
  CONSTRAINT `FK_28cdb48c-655c-45ab-a257-a8f5c2b76634` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_476ae8d1-15d8-45e0-8f58-3bd10ba8031e` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `genre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'mujeres'),(2,'hombres'),(3,'unisex');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marks` (
  `id` int(11) NOT NULL,
  `mark` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (1,'dior'),(2,'CH'),(3,'paco rabanne'),(4,'kevingston'),(5,'polo'),(6,'colbert'),(7,'old spice'),(8,'gucci');
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `measures`
--

DROP TABLE IF EXISTS `measures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `measures` (
  `id` int(11) NOT NULL,
  `measure` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measures`
--

LOCK TABLES `measures` WRITE;
/*!40000 ALTER TABLE `measures` DISABLE KEYS */;
INSERT INTO `measures` VALUES (1,30),(2,50),(3,70),(4,100),(5,120);
/*!40000 ALTER TABLE `measures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `models`
--

DROP TABLE IF EXISTS `models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `model` varchar(30) NOT NULL,
  `markId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_02204dd4-de5e-46f3-954b-b1ec5ac36eac` (`markId`),
  CONSTRAINT `FK_02204dd4-de5e-46f3-954b-b1ec5ac36eac` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `models`
--

LOCK TABLES `models` WRITE;
/*!40000 ALTER TABLE `models` DISABLE KEYS */;
INSERT INTO `models` VALUES (0,'bueno',1),(1,'bueno',1),(2,'muy bueno',1),(3,'buenísimo',1),(4,'genial',2),(5,'wine',2),(6,'black',2),(7,'red',3),(8,'great',3),(9,'florwers',3),(10,'business',4),(11,'green',4),(12,'roble',4),(13,'golf',5),(14,'chacras',5),(15,'somblu',5),(16,'chair',6),(17,'others',6),(18,'mirror',6),(19,'goof',7),(20,'nice',7),(21,'wonderfull',7),(22,'perfume',7),(23,'chocolate',7),(24,'wine',7),(25,'candy',8),(26,'coffee',8),(27,'piano',8);
/*!40000 ALTER TABLE `models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `outlet` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `markId` int(11) NOT NULL,
  `modelId` int(11) NOT NULL,
  `genreId` int(11) NOT NULL,
  `measureId` int(11) NOT NULL,
  `destacado` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a7b8d4de-e72c-4632-8ac0-8d3a56a42889` (`genreId`),
  KEY `FK_e70808c9-cd74-4a78-9953-b511574049e2` (`measureId`),
  KEY `FK_0ef79813-84ce-4a04-ac5c-d213aa82f7f4` (`modelId`),
  KEY `FK_7f1f7acb-6736-4707-bf1b-f9d5cb8c6504` (`markId`),
  CONSTRAINT `FK_0ef79813-84ce-4a04-ac5c-d213aa82f7f4` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`),
  CONSTRAINT `FK_7f1f7acb-6736-4707-bf1b-f9d5cb8c6504` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`),
  CONSTRAINT `FK_a7b8d4de-e72c-4632-8ac0-8d3a56a42889` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`),
  CONSTRAINT `FK_e70808c9-cd74-4a78-9953-b511574049e2` FOREIGN KEY (`measureId`) REFERENCES `measures` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,777,0,100,6,2,3,1,1,'perfume-1621832159565.jpg'),(3,222,1,222,4,4,2,3,0,'perfume-1621834263640.jpg'),(4,222,0,555,3,3,2,3,0,'perfume-1621878815661.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `userType` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Cristian','Smail','cristian.ls@outlook.com','$2a$10$dQ2TMxw9lGmGK0TI/TmZl.5HgavZMHAHrE9U1XXLVc1tRetofRoKW',1),(2,'Juan','Pepinillo','juan@pepinillo.com','$2a$10$n2QXCwfXv7Hzh/10vwCdcuJH5aIA7Zj80MvpcaW3BDbZNperQ5O4O',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sensoriale_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-24 20:32:25
