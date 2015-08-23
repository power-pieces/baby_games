/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : db_baby_games

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-08-23 13:42:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tbl_record`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_record`;
CREATE TABLE `tbl_record` (
  `id` char(64) NOT NULL,
  `game_id` int(1) NOT NULL,
  `level` int(1) NOT NULL,
  `score` int(100) NOT NULL,
  PRIMARY KEY (`id`,`game_id`,`level`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_record
-- ----------------------------
INSERT INTO `tbl_record` VALUES ('test_0', '1', '1', '300');
INSERT INTO `tbl_record` VALUES ('test_0', '1', '2', '300');
INSERT INTO `tbl_record` VALUES ('test_0', '1', '3', '300');

-- ----------------------------
-- Table structure for `tbl_user`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user` (
  `id` char(64) NOT NULL,
  `name` char(20) NOT NULL,
  `pic` text NOT NULL,
  `regist_dt` datetime NOT NULL,
  `last_login_dt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES ('1', 'jing', 'null', '2015-08-19 10:50:55', '2015-08-19 11:25:57');
INSERT INTO `tbl_user` VALUES ('test_0', 'test_0', '', '2015-08-21 23:24:19', '2015-08-23 13:41:08');
