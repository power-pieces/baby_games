<?php

class User
{
    /**
     * 用户登陆
     */
    public function login(&$params, &$res)
    {
        $id = mysql_escape_string($params->id);
        $name = mysql_escape_string($params->name);
        $pic = mysql_escape_string($params->pic);
        $sql = "INSERT INTO tbl_user(id,name,pic,regist_dt,last_login_dt)
                VALUES('%s','%s','%s', NOW(), NOW())
                ON DUPLICATE KEY UPDATE
                name='%s',
                pic='%s',
                last_login_dt = NOW();";
        $sql = sprintf($sql, $id, $name, $pic, $name, $pic);

        $st = new SqlHelper();
        $st->conn();
        $result = $st->modify($sql);
        $st->close();

        if($result) {
            //数据登陆成功，开始获取用户数据
            $data = $this->getUserInfo($id);
            $data['levels'] = $this->getLevelInfo($id);
            $res['data'] = $data;
        } else {
            $res['error'] = 1;
            $res['msg'] = "登陆失败！";
        }
    }

    /**
     * 获取用户的排名
     * @param $id
     */
    private function getLevelInfo($id)
    {
        $sql = "SELECT * FROM tbl_record WHERE id= '%s'";
        $sql = sprintf($sql, $id);
        $st = new SqlHelper();
        $st->conn();
        $result = $st->query($sql);
        $st->close();
        return $result;
    }

    /**
     * 获取用户信息
     * @param $id
     */
    private function getUserInfo($id)
    {
        $sql = "SELECT * FROM tbl_user WHERE id='%s'";
        $sql = sprintf($sql, mysql_escape_string($id));
        $st = new SqlHelper();
        $st->conn();
        $result = $st->query($sql);
        $result = $result[0];
        $st->close();
        return $result;
    }

    /**
     * 提交游戏结果
     * @param $params
     * @param $res
     */
    public function game_result(&$params, &$res)
    {
        $id = mysql_escape_string($params->id);
        $gameId = intval($params->game_id);
        $level = intval($params->level);
        $score = intval($params->score);

        $sql = "INSERT INTO tbl_record(id, game_id, level, score) VALUES('$id',$gameId,$level,$score) ON DUPLICATE KEY UPDATE score=$score";

        $st = new SqlHelper();
        $st->conn();
        $st->modify($sql);
        $st->close();
    }

    /**
     * 获取排行榜
     * @param $params
     * @param $res
     */
    public function get_rank(&$params, &$res)
    {
        $st = new SqlHelper();
        $data = array();
        $data['self'] = 1;
//        $id = mysql_escape_string($params->id);

//        $sql = "SELECT COUNT(*) AS position FROM tbl_user WHERE total_score > (SELECT total_score FROM tbl_user WHERE id = '%s')";
//        $sql = sprintf($sql, $id);
//        $st->conn();
//        $result = $st->query($sql);
//        $data['self'] = $result[0]['position'];
//        $st->close();

        $sql = "SELECT tbl_record.id, tbl_record.game_id, name, SUM(score) AS score FROM tbl_record LEFT JOIN tbl_user ON tbl_record.id = tbl_user.id GROUP BY id,game_id ORDER BY score DESC LIMIT 0,20";
        $st->conn();
        $result = $st->query($sql);
        $st->close();
        $data['list'] = $result;

        $res['data'] = $data;
        return $result;
    }

    /**
     * 统计数据
     * @param $params
     * @param $res
     */
    public function statistic(&$params, &$res)
    {
        $content = mysql_escape_string($params->content);
        $sql = "INSERT INTO tbl_statistic(content, count) VALUES('%s', 1) ON DUPLICATE KEY UPDATE count = count + 1;";
        $sql = sprintf($sql, $content);
        $sqlHelper = new SqlHelper();
        $sqlHelper->conn();
        $sqlHelper->modify($sql);
    }
}