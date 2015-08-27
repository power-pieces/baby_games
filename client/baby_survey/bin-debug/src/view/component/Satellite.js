var Satellite = (function (_super) {
    __extends(Satellite, _super);
    function Satellite(speed, offY, data) {
        _super.call(this);
        this._speed = 0;
        this._offY = 0;
        this.data = null;
        this._speed = speed;
        this._offY = offY;
        this.data = data;
        this.init();
    }
    var __egretProto__ = Satellite.prototype;
    __egretProto__.init = function () {
        this.touchEnabled = true;
        this.touchChildren = true;
        var bmd = ResUtil.createBitmap("rank_1_png");
        bmd.anchorX = 0.5;
        bmd.anchorY = 1;
        bmd.y = -this._offY;
        this.addChild(bmd);
    };
    __egretProto__.addListeners = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
    };
    __egretProto__.enterFrameHandler = function (e) {
        this.rotation += this._speed;
    };
    __egretProto__.dispose = function () {
        this.removeListeners();
    };
    return Satellite;
})(egret.Sprite);
Satellite.prototype.__class__ = "Satellite";
//# sourceMappingURL=Satellite.js.map