-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 16, 2014 at 04:27 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=29 ;

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
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  `user` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `name`, `created`, `updated`, `enabled`, `user`) VALUES
(6, 'Developer', '2014-11-05 08:03:52', '2014-11-05 09:22:57', 1, 2),
(7, 'Marketing', '2014-11-05 08:10:31', '2014-11-13 22:30:36', 1, 7),
(9, 'Sale', '2014-11-05 09:26:15', '2014-11-13 22:30:10', 1, 2);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- Dumping data for table `group_user`
--

INSERT INTO `group_user` (`id`, `user_id`, `group_id`, `created`, `updated`, `enabled`) VALUES
(8, 3, 9, '2014-11-05 15:57:54', '2014-11-05 15:57:54', 1),
(10, 5, 9, '2014-11-05 16:43:33', '2014-11-05 16:43:33', 1),
(15, 6, 6, '2014-11-13 23:22:46', '2014-11-13 23:22:46', 1),
(16, 8, 7, '2014-11-15 16:01:53', '2014-11-15 16:01:53', 1);

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
-- Table structure for table `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `user_id`, `owner_id`, `start`, `start_time`, `end`, `end_time`, `leave_type`, `hour`, `note`, `status`, `created`, `updated`) VALUES
(1, 3, 3, '2014-11-13 00:00:00', '08:00', '2014-11-13 00:00:00', '17:00', 0, 8, NULL, 1, '2014-11-13 19:26:16', '2014-11-14 20:28:41'),
(2, 3, 3, '2014-11-13 00:00:00', '08:00', '2014-11-13 00:00:00', '12:00', 0, 4, 'Hello Chao', 1, '2014-11-13 19:29:38', '2014-11-13 19:29:38'),
(3, 3, 3, '2014-11-13 00:00:00', '08:00', '2014-11-18 00:00:00', '17:00', 0, 36, 'Nghi di du lich', 1, '2014-11-13 19:36:46', '2014-11-13 19:36:46'),
(4, 5, 5, '2014-11-13 00:00:00', '08:00', '2014-11-17 00:00:00', '17:00', 1, 28, 'Haha', 1, '2014-11-13 20:21:14', '2014-11-14 20:30:08'),
(5, 7, 7, '2014-11-14 00:00:00', '08:00', '2014-11-14 00:00:00', '17:00', 0, 8, 'Test', 1, '2014-11-14 20:36:58', '2014-11-15 22:46:43'),
(6, 8, 8, '2014-11-15 00:00:00', '08:00', '2014-11-15 00:00:00', '12:00', 2, 4, 'Di choi cuoi tuan thoi', 1, '2014-11-15 15:59:06', '2014-11-16 15:33:33'),
(7, 7, 7, '2014-11-17 00:00:00', '08:00', '2014-11-17 00:00:00', '17:00', 0, 8, 'abc', 1, '2014-11-16 11:34:13', '2014-11-16 14:29:50'),
(8, 7, 7, '2014-11-17 00:00:00', '08:00', '2014-11-18 00:00:00', '10:00', 0, 10, 'Hay đó nha!', 1, '2014-11-16 14:34:12', '2014-11-16 14:38:59'),
(9, 7, 7, '2014-11-17 00:00:00', '08:00', '2014-11-22 00:00:00', '12:00', 0, 44, NULL, 1, '2014-11-16 15:12:29', '2014-11-16 15:45:51'),
(10, 7, 7, '2014-11-17 00:00:00', '08:00', '2014-11-17 00:00:00', '17:00', 0, 8, NULL, 0, '2014-11-16 16:36:08', '2014-11-16 16:36:08');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `username_canonical`, `email`, `email_canonical`, `entitled`, `taken`, `pending`, `gender`, `enabled`, `salt`, `password`, `last_login`, `locked`, `expired`, `expires_at`, `confirmation_token`, `password_requested_at`, `roles`, `credentials_expired`, `credentials_expire_at`, `is_deleted`, `created_date`, `updated_date`) VALUES
(1, 'Linh', 'Tran', 'admin', 'admin', 'admin@likipe.se', 'admin@likipe.se', 96, 0, 0, 1, 1, 'k80xkn8lt9sss0csss840c8k4s4ko8g', 'x7EQADRYJOoM55zrZuplqk1Pbcxu8aogh/Gx3/Z7TPD7BL+jCMydNo+LoeVksU0FuV5PNLn4oY5/xdfnmRPpIw==', '2014-11-16 22:14:56', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:16:"ROLE_SUPER_ADMIN";}', 0, NULL, NULL, '2014-01-21 13:52:16', '2014-11-16 22:14:56'),
(2, 'Thanh', 'Nguyen', 'nqthanh', 'nqthanh', 'nqthanh@wincofood.com.vn', 'nqthanh@wincofood.com.vn', 96, 0, 0, 1, 1, 't4ih61t6lvk4wgoo0gw0s8ok84c0044', 'IexHddMsl7KCuWE8toxz//xy+RhX4iL6btEBD0SCihB5ddrXfpUMJAFFp9Ps6aUFAmhm6OVMVKncnlmSZo4CPg==', '2014-11-16 15:39:15', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-03 09:27:37', '2014-11-16 15:39:15'),
(3, 'Nhat', 'Hoa', 'nhathoa', 'nhathoa', 'nhathoa@gmail.com', 'nhathoa@gmail.com', 96, 0, 0, 1, 1, '646w7lugnts0owkgkcgkocssgo0goc8', '3TGUvbzxcWCwij99V0F17py8uAFhHxDAYECe9BjA9iHTZFLM1e8OtfWRrgnfCI96yzv4FNMMy7/54xusXd5JKg==', '2014-11-16 15:42:50', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-04 04:28:25', '2014-11-16 15:42:50'),
(5, 'Alex', 'Tran', 'alextran', 'alextran', 'alex@likipe.se', 'alex@likipe.se', 96, 0, 0, 1, 1, '5oswq8zo9d8ogsko4ksgskko08s0cs0', 'lxgXw5oqlI5v2ymxEjERUudtLmRzS/8NQklQTCuggbt8VyOEWzsDMajI5rGQT2MXWbJf1/hqobR9ojMcUrfw1Q==', '2014-11-13 22:35:45', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-05 09:51:24', '2014-11-13 22:35:45'),
(6, 'Dung', 'Nguyen', 'dungnguyen', 'dungnguyen', 'dungnguyen@gmail.com', 'dungnguyen@gmail.com', 96, 0, 0, 1, 1, 'mo0iu4o1o3kwg404csc0cw484c00gs0', 'hxNBf/uDOSeS2prhl34MMN0HbppFXAQkZ3oaTfDWtYXluGcTL++lKjUu+3jb6oagRZJpFkWptRUUvjB+U0rYhw==', NULL, 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-05 09:52:46', '2014-11-05 09:52:46'),
(7, 'Vinh', 'Dang', 'vinhdang', 'vinhdang', 'vinhdang@gmail.com', 'vinhdang@gmail.com', 96, 70, 8, 1, 1, 'gf21hmta9nkkwc0g0cwkwko04kw0s0g', 'Qa3Ea7VZPzU2XiYEOuzWal/9kkaSYogK/wFzsZLeRPMbECf2Z5sKecKT6ADEYdNLYiKZ0l3XDJiRGEGqH2jj6A==', '2014-11-16 15:43:07', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:9:"ROLE_BOSS";}', 0, NULL, NULL, '2014-11-05 09:54:06', '2014-11-16 16:36:08'),
(8, '12', '34', '1234', '1234', '1234@gmail.com', '1234@gmail.com', 96, 4, 0, 1, 1, 'p39rf60d2i8sc8socokw8840oo4g4os', 'FXFIjqDHMGgRwsrKekMfYWxnKRKhnachOCg8vOw9nq3Wxl8sw2qly52A8qCwW2k7uFweZhNfhel/lnArWJ6fPw==', '2014-11-16 15:33:53', 0, 0, NULL, NULL, NULL, 'a:1:{i:0;s:13:"ROLE_EMPLOYEE";}', 0, NULL, NULL, '2014-11-15 15:56:08', '2014-11-16 15:33:53');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
