/**
* 数据中心
*/
var DC = (function () {
    function DC() {
    }
    var __egretProto__ = DC.prototype;
    //获取总分
    DC.getTotalScore = function () {
        var score = 0;
        for (var k in this.levels) {
            score += this.levels[k].score;
        }
        return score;
    };
    //配置文件
    DC.cfg = null;
    //关卡配置
    DC.levelCfg = null;
    //用户id
    DC.id = "test_0";
    //用户名称
    DC.name = "test_0";
    //用户图片
    DC.pic = "";
    //关卡
    DC.levels = [];
    //游戏是否暂停了
    DC.isPause = false;
    return DC;
})();
DC.prototype.__class__ = "DC";
