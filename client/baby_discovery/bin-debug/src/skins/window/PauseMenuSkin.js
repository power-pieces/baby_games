var skins;
(function (skins) {
    var window;
    (function (window) {
        var PauseMenuSkin = (function (_super) {
            __extends(PauseMenuSkin, _super);
            function PauseMenuSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [204, 250]);
                this.elementsContent = [this.btnContinue_i(), this.btnMenu_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PauseMenuSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PauseMenuSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.btnMenu_i = function () {
                var t = new egret.gui.Button();
                this.btnMenu = t;
                this.__s(t, ["label", "x", "y"], ["退出游戏", 53, 117]);
                return t;
            };
            __egretProto__.btnContinue_i = function () {
                var t = new egret.gui.Button();
                this.btnContinue = t;
                this.__s(t, ["label", "x", "y"], ["继续探索", 53, 24]);
                return t;
            };
            PauseMenuSkin._skinParts = ["btnContinue", "btnMenu"];
            return PauseMenuSkin;
        })(egret.gui.Skin);
        window.PauseMenuSkin = PauseMenuSkin;
        PauseMenuSkin.prototype.__class__ = "skins.window.PauseMenuSkin";
    })(window = skins.window || (skins.window = {}));
})(skins || (skins = {}));
