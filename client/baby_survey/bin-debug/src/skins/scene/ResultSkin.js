var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var ResultSkin = (function (_super) {
            __extends(ResultSkin, _super);
            function ResultSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__4_i(), this.topBanner_i(), this.txtScore_i(), this.btnRank_i(), this.imgFace_i(), this.txtTime_i(), this.btnMenu_i(), this.btnReplay_i(), this.btnNext_i()];
                this.txtGetScore_i();
                this.imgStar0_i();
                this.imgStar1_i();
                this.imgStar2_i();
                this.states = [
                    new egret.gui.State("win", [
                        new egret.gui.AddItems("imgStar0", "", "last", ""),
                        new egret.gui.AddItems("imgStar1", "", "last", ""),
                        new egret.gui.AddItems("imgStar2", "", "last", ""),
                        new egret.gui.SetProperty("txtTime", "horizontalCenter", 0),
                        new egret.gui.SetProperty("btnReplay", "x", 172)
                    ]),
                    new egret.gui.State("fail", [
                        new egret.gui.AddItems("txtGetScore", "", "last", ""),
                        new egret.gui.SetProperty("txtTime", "horizontalCenter", 0),
                        new egret.gui.SetProperty("btnReplay", "x", 172)
                    ]),
                    new egret.gui.State("defeat", [
                        new egret.gui.SetProperty("__4", "height", 800),
                        new egret.gui.SetProperty("txtTime", "y", 348),
                        new egret.gui.SetProperty("txtTime", "horizontalCenter", 0),
                        new egret.gui.SetProperty("btnMenu", "x", 75),
                        new egret.gui.SetProperty("btnMenu", "y", 565),
                        new egret.gui.SetProperty("btnReplay", "y", 428),
                        new egret.gui.SetProperty("btnReplay", "horizontalCenter", 0),
                        new egret.gui.SetProperty("btnNext", "x", 282),
                        new egret.gui.SetProperty("btnNext", "y", 563)
                    ])
                ];
            }
            var __egretProto__ = ResultSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ResultSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.btnMenu_i = function () {
                var t = new egret.gui.Button();
                this.btnMenu = t;
                this.__s(t, ["label", "x", "y"], ["返回起点", 9, 569.5]);
                return t;
            };
            __egretProto__.btnNext_i = function () {
                var t = new egret.gui.Button();
                this.btnNext = t;
                this.__s(t, ["label", "x", "y"], ["新的知识", 335, 569.5]);
                return t;
            };
            __egretProto__.btnRank_i = function () {
                var t = new egret.gui.Button();
                this.btnRank = t;
                this.__s(t, ["label", "x", "y"], ["排行榜", 312, 109]);
                return t;
            };
            __egretProto__.btnReplay_i = function () {
                var t = new egret.gui.Button();
                this.btnReplay = t;
                this.__s(t, ["label", "y"], ["重新探索", 569.5]);
                return t;
            };
            __egretProto__.imgFace_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgFace = t;
                this.__s(t, ["source", "x", "y"], ["box_jpg", 191, 213]);
                return t;
            };
            __egretProto__.imgStar0_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgStar0 = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 117, 344]);
                return t;
            };
            __egretProto__.imgStar1_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgStar1 = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 213, 344]);
                return t;
            };
            __egretProto__.imgStar2_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgStar2 = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 309, 344]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["bgImage", 0, 0]);
                return t;
            };
            __egretProto__.topBanner_i = function () {
                var t = new Top();
                this.topBanner = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.TopSkin, 0, 0]);
                return t;
            };
            __egretProto__.txtGetScore_i = function () {
                var t = new egret.gui.Label();
                this.txtGetScore = t;
                this.__s(t, ["horizontalCenter", "text", "y"], [0, "积分：10", 349]);
                return t;
            };
            __egretProto__.txtScore_i = function () {
                var t = new egret.gui.Label();
                this.txtScore = t;
                this.__s(t, ["text", "x", "y"], ["积分：1000", 47, 120]);
                return t;
            };
            __egretProto__.txtTime_i = function () {
                var t = new egret.gui.Label();
                this.txtTime = t;
                this.__s(t, ["text", "y"], ["时间：1111秒", 439]);
                return t;
            };
            ResultSkin._skinParts = ["topBanner", "txtScore", "btnRank", "imgFace", "txtTime", "btnMenu", "btnReplay", "btnNext", "txtGetScore", "imgStar0", "imgStar1", "imgStar2"];
            return ResultSkin;
        })(egret.gui.Skin);
        scene.ResultSkin = ResultSkin;
        ResultSkin.prototype.__class__ = "skins.scene.ResultSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ResultSkin.js.map