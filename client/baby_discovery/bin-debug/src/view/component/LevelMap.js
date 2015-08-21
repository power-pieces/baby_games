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
    };
    __egretProto__.partAdded = function (partName, instance) {
        this.levels[partName] = instance;
    };
    return LevelMap;
})(ASkinCom);
LevelMap.prototype.__class__ = "LevelMap";
//# sourceMappingURL=LevelMap.js.map