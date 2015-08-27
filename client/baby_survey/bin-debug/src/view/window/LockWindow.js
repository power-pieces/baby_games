/**
 *
 * @author
 *
 */
var LockWindow = (function (_super) {
    __extends(LockWindow, _super);
    function LockWindow(content) {
        _super.call(this, skins.window.LockWindowSkin);
        this.txtContent = null;
        this._content = content;
    }
    var __egretProto__ = LockWindow.prototype;
    __egretProto__.setContent = function (content) {
        this._content = content;
        this.txtContent.text = this._content;
    };
    __egretProto__.onSetData = function () {
        if (this.data != null) {
            this.setContent(this.data);
        }
    };
    __egretProto__.init = function () {
        this.txtContent.text = this._content;
    };
    return LockWindow;
})(ASkinCom);
LockWindow.prototype.__class__ = "LockWindow";
