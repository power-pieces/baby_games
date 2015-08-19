/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : db_baby_games

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-08-19 10:35:18
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

-- ----------------------------
-- Table structure for `tbl_user`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user` (
  `id` char(64) NOT NULL,
  `name` char(20) NOT NULL,
  `pic` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
