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
                this.elementsContent = [this.__3_i(), this.topBanner_i(), this.txtScore_i(), this.txtLevel_i(), this.txtTime_i(), this.playBoard_i(), this.btnReplay_i(), this.btnPause_i(), this.txtQuestion_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__3", "percentWidth", 100),
                        new egret.gui.SetProperty("__3", "percentHeight", 100)
                    ])
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
                this.__s(t, ["label", "width", "x", "y"], ["暂停", 80, 393, 97.5]);
                return t;
            };
            __egretProto__.btnReplay_i = function () {
                var t = new egret.gui.Button();
                this.btnReplay = t;
                this.__s(t, ["label", "width", "x", "y"], ["重玩", 62, 286, 97.5]);
                return t;
            };
            __egretProto__.playBoard_i = function () {
                var t = new egret.gui.SkinnableContainer();
                this.playBoard = t;
                this.__s(t, ["height", "percentWidth", "x", "y"], [550, 100, 0, 250]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth", "x", "y"], [100, "bgImage", 100, 0, 0]);
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
                this.__s(t, ["text", "x", "y"], ["关卡：0", 164, 111]);
                return t;
            };
            __egretProto__.txtQuestion_i = function () {
                var t = new egret.gui.Label();
                this.txtQuestion = t;
                this.__s(t, ["text", "x", "y"], ["图中有几颗五角星?", 13, 200]);
                return t;
            };
            __egretProto__.txtScore_i = function () {
                var t = new egret.gui.Label();
                this.txtScore = t;
                this.__s(t, ["text", "x", "y"], ["积分：1000", 6, 110.5]);
                return t;
            };
            __egretProto__.txtTime_i = function () {
                var t = new egret.gui.Label();
                this.txtTime = t;
                this.__s(t, ["text", "x", "y"], ["计时：6秒", 294, 199.5]);
                return t;
            };
            GameSkin._skinParts = ["topBanner", "txtScore", "txtLevel", "txtTime", "playBoard", "btnReplay", "btnPause", "txtQuestion"];
            return GameSkin;
        })(egret.gui.Skin);
        scene.GameSkin = GameSkin;
        GameSkin.prototype.__class__ = "skins.scene.GameSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
//# sourceMappingURL=GameSkin.js.map