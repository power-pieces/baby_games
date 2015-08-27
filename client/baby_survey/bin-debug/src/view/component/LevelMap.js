/**
 *
 * @author
 *
 */
var LevelMap = (function (_super) {
    __extends(LevelMap, _super);
    function LevelMap() {
        _super.call(this, skins.component.LevelMapSkin);
        this.levels = {};
    }
    var __egretProto__ = LevelMap.prototype;
    __egretProto__.init = function () {
    };
    __egretProto__.update = function () {
        for (var k in DC.levels) {
            var levelVO = DC.levels[k];
            var level = this.levels["level" + k];
            level.setLevel(levelVO);
        }
        //解锁的关卡
        var level = this.levels["level" + DC.levels.length];
        level.setLevel({ level: DC.levels.length + 1, score: 0 });
    };
    __egretProto__.partAdded = function (partName, instance) {
        this.levels[partName] = instance;
        instance.setLevel(null);
    };
    return LevelMap;
})(ASkinCom);
LevelMap.prototype.__class__ = "LevelMap";
