/**
 *
 * @author
 *
 */
var Top = (function (_super) {
    __extends(Top, _super);
    function Top() {
        _super.call(this, skins.component.TopSkin);
    }
    var __egretProto__ = Top.prototype;
    __egretProto__.setContent = function (title, onClick, thisObj) {
        this.txtTitle.text = title;
        if (null != onClick) {
            this._onClose = onClick.bind(thisObj);
        }
    };
    __egretProto__.init = function () {
    };
    __egretProto__.addListeners = function () {
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnBack_touchBegionHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnBack_touchBegionHandler, this);
    };
    __egretProto__.btnBack_touchBegionHandler = function (e) {
        if (this._onClose) {
            this._onClose();
        }
    };
    return Top;
})(ASkinCom);
Top.prototype.__class__ = "Top";
//# sourceMappingURL=Top.js.map