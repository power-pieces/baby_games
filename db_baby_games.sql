/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : db_baby_games

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-08-19 11:27:42
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
INSERT INTO `tbl_record` VALUES ('1', '1', '1', '1000');
INSERT INTO `tbl_record` VALUES ('1', '1', '2', '329');
INSERT INTO `tbl_record` VALUES ('2', '1', '1', '130');

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
