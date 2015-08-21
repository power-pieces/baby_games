var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var GameSkin = (function (_super) {
            __extends(GameSkin, _super);
            function GameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.topBanner_i(), this.txtScore_i(), this.txtLevel_i(), this.txtTime_i(), this.btnReplay_i(), this.btnPause_i(), this.playBoard_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = GameSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return GameSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.btnPause_i = function () {
                var t = new egret.gui.Button();
                this.btnPause = t;
                this.__s(t, ["label", "x", "y"], ["暂停", 314, 726]);
                return t;
            };
            __egretProto__.btnReplay_i = function () {
                var t = new egret.gui.Button();
                this.btnReplay = t;
                this.__s(t, ["label", "x", "y"], ["重玩", 105, 726]);
                return t;
            };
            __egretProto__.playBoard_i = function () {
                var t = new egret.gui.SkinnableContainer();
                this.playBoard = t;
                this.__s(t, ["height", "width", "x", "y"], [466, 451, 14, 244]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bgImage", 0, 0]);
                return t;
            };
            __egretProto__.topBanner_i = function () {
                var t = new Top();
                this.topBanner = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.TopSkin, 0, 0]);
                return t;
            };
            __egretProto__.txtLevel_i = function () {
                var t = new egret.gui.Label();
                this.txtLevel = t;
                this.__s(t, ["text", "x", "y"], ["关卡：0", 305, 115]);
                return t;
            };
            __egretProto__.txtScore_i = function () {
                var t = new egret.gui.Label();
                this.txtScore = t;
                this.__s(t, ["text", "x", "y"], ["积分：1000", 47, 115]);
                return t;
            };
            __egretProto__.txtTime_i = function () {
                var t = new egret.gui.Label();
                this.txtTime = t;
                this.__s(t, ["horizontalCenter", "text", "y"], [0.5, "倒计时：6秒", 197]);
                return t;
            };
            GameSkin._skinParts = ["topBanner", "txtScore", "txtLevel", "txtTime", "btnReplay", "btnPause", "playBoard"];
            return GameSkin;
        })(egret.gui.Skin);
        scene.GameSkin = GameSkin;
        GameSkin.prototype.__class__ = "skins.scene.GameSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
//# sourceMappingURL=GameSkin.js.map