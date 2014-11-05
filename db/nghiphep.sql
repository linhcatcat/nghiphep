-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 04, 2014 at 11:04 AM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nghiphep`
--

-- --------------------------------------------------------

--
-- Table structure for table `cms_page`
--

CREATE TABLE IF NOT EXISTS `cms_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=28 ;

--
-- Dumping data for table `cms_page`
--

INSERT INTO `cms_page` (`id`, `name`, `slug`, `content`, `created`, `updated`) VALUES
(25, 'Gold milk', 'gold-milk', '<p><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="http://winco.loc/upload/files/imagesCA0LC7WB.jpg" /></p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>', '2014-10-27 08:03:22', '2014-10-27 08:31:09'),
(27, 'Hello Chao', 'hello-chao', '<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>', '2014-10-27 11:20:07', '2014-10-27 11:20:07');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `summary` longtext COLLATE utf8_unicode_ci,
  `content` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `enabled` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `slug`, `image`, `summary`, `content`, `created`, `updated`, `enabled`) VALUES
(2, 'Hello Chao', 'hello-chao', '/uploads/product/1414640531-7yg3i3jbzz.jpg', '<p>Hello Chao</p>', '<p>Hello Chao</p>\r\n\r\n<p><img alt="" src="http://winco.loc/upload/files/bg.jpg" style="height:646px; width:600px" /></p>', '2014-10-30 04:42:11', '2014-10-30 04:42:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expired` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `credentials_expired` tinyint(1) NOT NULL,
  `credentials_expire_at` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `username_canonical`, `email`, `email_canonical`, `gender`, `enabled`, `salt`, `password`, `last_login`, `locked`, `expired`, `expires_at`, `confirmation_token`, `password_requested_at`, `roles`, `credentials_expired`, `credentials_expire_at`, `is_deleted`, `created_date`, `updated_date`) VALUES
(1, 'Linh', 'Tran', 'admin', 'admin', 'admin@likipe.se', 'admin@likipe.se', 1, 1, 'k80xkn8lt9sss0csss840c8k4s4ko8g', 'x7EQADRYJOoM55zrZuplqk1Pbcxu8aogh/Gx3/Z7TPD7BL+jCMydNo+LoeVksU0FuV5PNLn4oY5/xdfnmRPpIw==', '2014-11-04 11:03:21', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:16:"ROLE_SUPER_ADMIN";}', 0, NULL, NULL, '2014-01-21 13:52:16', '2014-11-04 11:03:21'),
(2, 'Thanh', 'Nguyen', 'nqthanh', 'nqthanh', 'nqthanh@wincofood.com.vn', 'nqthanh@wincofood.com.vn', 1, 1, 't4ih61t6lvk4wgoo0gw0s8ok84c0044', 'IexHddMsl7KCuWE8toxz//xy+RhX4iL6btEBD0SCihB5ddrXfpUMJAFFp9Ps6aUFAmhm6OVMVKncnlmSZo4CPg==', '2014-11-03 11:50:26', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-03 09:27:37', '2014-11-04 05:42:05'),
(3, 'Nhat', 'Hoa', 'nhathoa', 'nhathoa', 'nhathoa@gmail.com', 'nhathoa@gmail.com', 1, 1, '646w7lugnts0owkgkcgkocssgo0goc8', '3TGUvbzxcWCwij99V0F17py8uAFhHxDAYECe9BjA9iHTZFLM1e8OtfWRrgnfCI96yzv4FNMMy7/54xusXd5JKg==', '2014-11-04 11:03:30', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-04 04:28:25', '2014-11-04 11:03:30');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
