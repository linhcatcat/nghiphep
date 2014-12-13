-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 13, 2014 at 07:35 AM
-- Server version: 5.5.27
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cms_page`
--

INSERT INTO `cms_page` (`id`, `name`, `slug`, `content`, `created`, `updated`) VALUES
(25, 'Gold milk', 'gold-milk', '<p><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="/upload/files/imagesCA0LC7WB.jpg" style="height:161px; width:121px" /><img alt="" src="http://winco.loc/upload/files/imagesCA0LC7WB.jpg" /></p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>\r\n\r\n<p>Gold milk</p>', '2014-10-27 08:03:22', '2014-10-27 08:31:09'),
(27, 'Hello Chao', 'hello-chao', '<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>\r\n\r\n<p>Hello chao</p>', '2014-10-27 11:20:07', '2014-10-27 11:20:07'),
(28, 'Hello Chao', 'hello-chao', '<p>dfghdfhg</p>', '2014-11-05 07:40:44', '2014-11-05 07:40:44');

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE IF NOT EXISTS `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  `user` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `name`, `code`, `created`, `updated`, `enabled`, `user`) VALUES
(6, 'Developer', '34567', '2014-11-05 08:03:52', '2014-11-21 17:42:18', 1, 2),
(7, 'Marketing', '23456', '2014-11-05 08:10:31', '2014-11-21 17:41:59', 1, 7),
(9, 'Sale', '12345', '2014-11-05 09:26:15', '2014-11-21 17:41:42', 1, 2),
(10, 'IT', '84', '2014-11-21 18:47:12', '2014-11-21 18:47:12', 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `group_manager`
--

CREATE TABLE IF NOT EXISTS `group_manager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `group_manager`
--

INSERT INTO `group_manager` (`id`, `user_id`, `group_id`) VALUES
(4, 2, 10),
(5, 5, 10),
(7, 6, 9),
(8, 10, 9),
(9, 13, 7),
(10, 14, 7),
(11, 1, 6),
(12, 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `group_user`
--

CREATE TABLE IF NOT EXISTS `group_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `group_user`
--

INSERT INTO `group_user` (`id`, `user_id`, `group_id`, `created`, `updated`, `enabled`) VALUES
(8, 3, 9, '2014-11-05 15:57:54', '2014-11-05 15:57:54', 1),
(10, 5, 9, '2014-11-05 16:43:33', '2014-11-05 16:43:33', 1),
(15, 6, 6, '2014-11-13 23:22:46', '2014-11-13 23:22:46', 1),
(16, 8, 7, '2014-11-15 16:01:53', '2014-11-15 16:01:53', 1),
(17, 11, 10, '2014-11-21 18:47:39', '2014-11-21 18:47:39', 1),
(18, 9, 10, '2014-11-21 18:48:04', '2014-11-21 18:48:04', 1),
(19, 10, 10, '2014-11-21 18:48:16', '2014-11-21 18:48:16', 1),
(20, 2, 9, '2014-11-21 22:09:13', '2014-11-21 22:09:13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE IF NOT EXISTS `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8_unicode_ci,
  `author` int(11) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id`, `action`, `message`, `author`, `created`) VALUES
(3, 'Export', 'Export 12 Users', 1, '2014-11-17 15:49:24'),
(4, 'Update', 'Update dungnguyen with id = 6', 1, '2014-11-17 15:59:22'),
(5, 'Update', 'Update dungnguyen with id = 6', 1, '2014-11-17 16:00:46'),
(6, 'Update', 'Update 1234 with id = 8', 1, '2014-11-20 09:56:53'),
(7, 'Export', 'Export 9 Users', 1, '2014-11-20 10:48:39'),
(8, 'Export', 'Export 9 Users', 1, '2014-11-20 10:48:45'),
(9, 'Export', 'Export 12 Users', 1, '2014-11-20 12:55:21'),
(10, 'Export', 'Export 12 Users', 1, '2014-11-20 13:02:10'),
(11, 'Export', 'Export 12 Users', 1, '2014-11-20 13:03:24'),
(12, 'Export', 'Export 12 Users', 1, '2014-11-20 13:03:36'),
(13, 'Export', 'Export 12 Users', 1, '2014-11-20 13:04:28'),
(14, 'Export', 'Export 4 Users', 1, '2014-11-20 13:07:16'),
(15, 'Export', 'Export 12 Users', 1, '2014-11-20 13:11:24'),
(16, 'Export', 'Export 6 Users', 1, '2014-11-20 13:14:29'),
(17, 'Export', 'Export 8 Users', 1, '2014-11-20 13:24:32'),
(18, 'Export', 'Export 9 Users', 1, '2014-11-20 13:29:08'),
(19, 'Export', 'Export 8 Users', 1, '2014-11-21 17:55:14'),
(20, 'Export', 'Export 8 Users', 1, '2014-11-21 18:00:31'),
(21, 'Export', 'Export 8 Users', 1, '2014-11-21 18:01:47'),
(22, 'Export', 'Export 8 Users', 1, '2014-11-21 18:09:03'),
(23, 'Export', 'Export 9 Users', 1, '2014-11-21 18:10:53'),
(24, 'Export', 'Export 9 Users', 1, '2014-11-21 18:12:38'),
(25, 'Export', 'Export 2 Users', 1, '2014-11-21 18:37:56'),
(26, 'Export', 'Export 2 Users', 1, '2014-11-21 18:38:30'),
(27, 'Export', 'Export 12 Users', 1, '2014-11-21 18:51:08'),
(28, 'Export', 'Export 15 Users', 1, '2014-11-23 12:21:26');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `slug`, `image`, `summary`, `content`, `created`, `updated`, `enabled`) VALUES
(2, 'Hello Chao', 'hello-chao', '/uploads/product/1416296991-soawzt87g8.png', '<p>Hello Chao</p>', '<p>Hello Chao</p>\r\n\r\n<p><img alt="" src="http://winco.loc/upload/files/bg.jpg" style="height:646px; width:600px" /></p>', '2014-10-30 04:42:11', '2014-11-18 14:49:51', 1),
(3, 'Hello Chao', '123', '/uploads/product/1416296979-lyfo93w2z1.png', '<p>123</p>', '<p>123</p>', '2014-11-18 14:49:39', '2014-11-18 15:50:07', 1),
(4, '456', '456', '/uploads/product/1416297098-zvfxqtrdd3.png', '<p>456</p>', '<p>456</p>', '2014-11-18 14:51:38', '2014-11-18 14:51:38', 1);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `approve_id` int(11) DEFAULT NULL,
  `start` datetime NOT NULL,
  `start_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `end` datetime NOT NULL,
  `end_time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `leave_type` int(11) NOT NULL,
  `hour` float NOT NULL,
  `note` longtext COLLATE utf8_unicode_ci,
  `status` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `approve_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `user_id`, `owner_id`, `approve_id`, `start`, `start_time`, `end`, `end_time`, `leave_type`, `hour`, `note`, `status`, `created`, `updated`, `approve_date`) VALUES
(27, 9, 9, 11, '2014-11-11 00:00:00', '08:00', '2014-11-12 00:00:00', '11:30', 0, 11.5, 'nghỉ phép năm', 1, '2014-11-21 18:42:45', '2014-11-21 18:50:18', '2014-11-21 18:50:18'),
(28, 9, 9, 11, '2014-11-13 00:00:00', '08:00', '2014-11-13 00:00:00', '15:00', 1, 6, 'nghỉ không lương', 1, '2014-11-21 18:43:41', '2014-11-21 18:50:16', '2014-11-21 18:50:16'),
(29, 10, 10, 11, '2014-11-04 00:00:00', '09:30', '2014-11-04 00:00:00', '11:30', 2, 2, 'nghỉ bù', 1, '2014-11-21 18:44:44', '2014-11-21 18:50:13', '2014-11-21 18:50:13'),
(30, 11, 11, 1, '2014-11-19 00:00:00', '08:00', '2014-11-26 00:00:00', '17:00', 0, 52, 'nghi phep nguoi duyet', 1, '2014-11-21 18:49:47', '2014-11-21 21:59:20', '2014-11-21 21:59:20'),
(31, 5, 2, 2, '2014-11-21 00:00:00', '08:00', '2014-11-21 00:00:00', '17:00', 0, 8, '1233456', 1, '2014-11-21 20:18:22', '2014-11-21 20:19:54', '2014-11-21 20:19:54'),
(32, 2, 2, NULL, '2014-11-21 00:00:00', '08:00', '2014-11-21 00:00:00', '17:00', 0, 8, '123', 0, '2014-11-21 22:04:36', '2014-11-21 22:04:36', NULL),
(33, 3, 2, 2, '2014-11-21 00:00:00', '08:00', '2014-11-21 00:00:00', '17:00', 0, 8, NULL, 1, '2014-11-21 22:06:07', '2014-11-21 22:07:56', '2014-11-21 22:07:56'),
(34, 6, 2, NULL, '2014-11-24 00:00:00', '08:00', '2014-11-25 00:00:00', '17:00', 0, 16, '123456', 0, '2014-11-24 17:52:06', '2014-11-24 17:52:06', NULL);

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
  `entitled` float NOT NULL,
  `taken` float NOT NULL DEFAULT '0',
  `pending` float NOT NULL DEFAULT '0',
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `username_canonical`, `email`, `email_canonical`, `entitled`, `taken`, `pending`, `gender`, `enabled`, `salt`, `password`, `last_login`, `locked`, `expired`, `expires_at`, `confirmation_token`, `password_requested_at`, `roles`, `credentials_expired`, `credentials_expire_at`, `is_deleted`, `created_date`, `updated_date`) VALUES
(1, 'Linh', 'Tran', 'admin', 'admin', 'admin@likipe.se', 'admin@likipe.se', 96, 0, 0, 1, 1, 'k80xkn8lt9sss0csss840c8k4s4ko8g', 'x7EQADRYJOoM55zrZuplqk1Pbcxu8aogh/Gx3/Z7TPD7BL+jCMydNo+LoeVksU0FuV5PNLn4oY5/xdfnmRPpIw==', '2014-12-13 09:48:22', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:16:"ROLE_SUPER_ADMIN";}', 0, NULL, NULL, '2014-01-21 13:52:16', '2014-12-13 09:48:22'),
(2, 'Thanh', 'Nguyen', 'nqthanh', 'nqthanh', 'nqthanh@wincofood.com.vn', 'nqthanh@wincofood.com.vn', 96, 0, 8, 1, 1, 't4ih61t6lvk4wgoo0gw0s8ok84c0044', 'IexHddMsl7KCuWE8toxz//xy+RhX4iL6btEBD0SCihB5ddrXfpUMJAFFp9Ps6aUFAmhm6OVMVKncnlmSZo4CPg==', '2014-11-27 20:58:20', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-03 09:27:37', '2014-11-27 20:58:20'),
(3, 'Nhat', 'Hoa', 'nhathoa', 'nhathoa', 'nhathoa@gmail.com', 'nhathoa@gmail.com', 96, 8, 0, 1, 1, '646w7lugnts0owkgkcgkocssgo0goc8', '3TGUvbzxcWCwij99V0F17py8uAFhHxDAYECe9BjA9iHTZFLM1e8OtfWRrgnfCI96yzv4FNMMy7/54xusXd5JKg==', '2014-11-21 18:39:31', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-04 04:28:25', '2014-11-21 22:07:56'),
(5, 'Alex', 'Tran', 'alextran', 'alextran', 'alex@likipe.se', 'alex@likipe.se', 96, 8, 0, 1, 1, '5oswq8zo9d8ogsko4ksgskko08s0cs0', 'lxgXw5oqlI5v2ymxEjERUudtLmRzS/8NQklQTCuggbt8VyOEWzsDMajI5rGQT2MXWbJf1/hqobR9ojMcUrfw1Q==', '2014-11-13 22:35:45', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-05 09:51:24', '2014-11-21 20:19:54'),
(6, 'Dung', 'Nguyen', 'dungnguyen', 'dungnguyen', 'dungnguyen@gmail.com', 'dungnguyen@gmail.com', 96, 0, 16, 1, 1, 'mo0iu4o1o3kwg404csc0cw484c00gs0', 'hxNBf/uDOSeS2prhl34MMN0HbppFXAQkZ3oaTfDWtYXluGcTL++lKjUu+3jb6oagRZJpFkWptRUUvjB+U0rYhw==', '2014-11-19 15:31:23', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-05 09:52:46', '2014-11-24 17:52:06'),
(7, 'Vinh', 'Dang', 'vinhdang', 'vinhdang', 'vinhdang@gmail.com', 'vinhdang@gmail.com', 96, 0, 0, 1, 1, 'gf21hmta9nkkwc0g0cwkwko04kw0s0g', 'Qa3Ea7VZPzU2XiYEOuzWal/9kkaSYogK/wFzsZLeRPMbECf2Z5sKecKT6ADEYdNLYiKZ0l3XDJiRGEGqH2jj6A==', '2014-11-20 10:03:51', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-05 09:54:06', '2014-11-20 10:09:25'),
(8, '12', '34', '1234', '1234', '1234@gmail.com', '1234@gmail.com', 96, 0, 0, 1, 0, 'p39rf60d2i8sc8socokw8840oo4g4os', 'FXFIjqDHMGgRwsrKekMfYWxnKRKhnachOCg8vOw9nq3Wxl8sw2qly52A8qCwW2k7uFweZhNfhel/lnArWJ6fPw==', '2014-11-16 15:33:53', 1, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-15 15:56:08', '2014-11-20 10:05:19'),
(9, 'Ai', 'Ha Minh', 'aihm', 'aihm', 'aihm.ict@gmail.com', 'aihm.ict@gmail.com', 96, 17.5, 0, 1, 1, 'argl0ht4fi8040o0w80o8oos8c84wg8', 'pMgXfzrtyWyfyKsaVJjHPCA9w/S32nw2aUiyc6vaAYb/rv3d8RaQXgZiB9S9fwQNf52dgu+9qyqWy7lV/yo/JA==', '2014-11-21 18:41:40', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-21 18:40:33', '2014-11-21 18:50:18'),
(10, 'Linh', 'Tran Cat', 'linhtc', 'linhtc', 'trancatlinh@gmail.com', 'trancatlinh@gmail.com', 96, 2, 0, 1, 1, 'tsb4wl79be8s44o0o8ook04s4o040gk', '5jfWs2ICUVqNL/1FNsx/m1QdVeVwimWuxmz01XnVakveaqbQK6lO70bra7Zs2pu+RD3i6Yaa1uEr4mifCeZEgw==', '2014-11-21 18:43:59', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-21 18:41:16', '2014-11-21 18:50:13'),
(11, 'Tien', 'Dang Van', 'tiendang', 'tiendang', 'tiendang@gmail.com', 'tiendang@gmail.com', 96, 52, 0, 1, 1, 'tjxaiy6bvqscgos0kwwgw08o484c48k', '7/+G9Nlr8R/Gb3wueptyCYtu2aKtUMw58mrLJIYtOINTSYpgMoRJC54d2iol8ITlQYtZ7Kf9QIbCVaf8RQDYgg==', '2014-11-21 18:49:01', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-21 18:46:39', '2014-11-21 21:59:20'),
(12, 'Import', 'User1', 'importuser1', 'importuser1', 'user1@newviet.vn', 'user1@newviet.vn', 96, 0, 0, 0, 1, '8zsuwhqfkf8kk8goksokks0ckk84g44', 'CThuvSuzst4wfekYXVgUq9S9KVpis+1mVhR5qSjaDbm8GnDrD7RybAOj+a9F2IcFT3ajfJLjaxj5ZFfn/cjczA==', '2014-11-21 19:02:31', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-21 19:00:33', '2014-11-21 19:02:31'),
(13, 'Import', 'User2', 'importuser2', 'importuser2', 'user2@newviet.vn', 'user2@newviet.vn', 96, 0, 0, 0, 1, '2xv0a1gpww2sck00c4wcoogwk0kkw8o', 'cUmg8+eoMyTnBPa2nuX91roj+jeFiYR+47UPFwJ9UI3KVsb8S5ZbXz3d9HwI1f1Vop/CYb2VcGHWYpBcR0fIhQ==', NULL, 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-21 19:00:33', '2014-11-21 19:00:33'),
(14, 'Import', 'User3', 'importuser3', 'importuser3', 'user3@newviet.vn', 'user3@newviet.vn', 120, 0, 0, 1, 1, 'o76pols2hqoc8ssogoc80g8g08s8wsg', 'N1FJq66YwDqZH3dDm6MAihYiRhCrUm8L4mEuSzQPRslBeXGIRmn6YzwE3rKvY3j5oXtf9YQaUSeIu7R+/Uuspw==', NULL, 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-21 19:00:33', '2014-11-21 19:00:33');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
