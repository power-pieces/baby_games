var GameBoard = (function (_super) {
    __extends(GameBoard, _super);
    function GameBoard(level) {
        _super.call(this);
        this._groups = {};
        this._pos = {};
        this._imgs = [];
        this._selected = null;
        this._over = null;
        this._mark = 0;
        this.time = 0;
        this._level = level;
        this.init();
        this.touchEnabled = true;
        this.touchChildren = true;
    }
    var __egretProto__ = GameBoard.prototype;
    __egretProto__.init = function () {
        this.addListeners();
        var positins = DC.cfg.positions;
        positins = positins.concat();
        var data = DC.levelCfg["level" + this._level];
        for (var i = 0; i < data.length; i++) {
            var group = data[i];
            var img0 = ResUtil.createBitmap(group[0]);
            var img1 = ResUtil.createBitmap(group[1]);
            img0.name = "group" + i + "_" + 0;
            img1.name = "group" + i + "_" + 1;
            this._groups[img0.name] = i;
            this._groups[img1.name] = i;
            var p = positins.shift();
            //img0.anchorX = img0.anchorY = 0.5;
            img0.x = p[0];
            img0.y = p[1];
            this._pos[img0.name] = p;
            p = positins.shift();
            //img1.anchorX = img1.anchorY = 0.5;
            img1.x = p[0];
            img1.y = p[1];
            this._pos[img1.name] = p;
            this.addChild(img0);
            this.addChild(img1);
            img0.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.img_touchBeginHandler, this);
            img1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.img_touchBeginHandler, this);
            img0.touchEnabled = true;
            img1.touchEnabled = true;
            this._imgs.push(img0);
            this._imgs.push(img1);
        }
    };
    __egretProto__.addListeners = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHandler, this);
    };
    __egretProto__.removeListeners = function () {
        for (var k in this._pos) {
            k.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.img_touchBeginHandler, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHandler, this);
    };
    __egretProto__.touchMoveHandler = function (e) {
        if (null != this._selected) {
            this._selected.x = e.localX - this._selected.width / 2;
            this._selected.y = e.localY - this._selected.height / 2;
            if (this._over != null) {
                this._over.scaleX = this._over.scaleY = 1;
                this._over = null;
            }
            for (var k in this._imgs) {
                var temp = this._imgs[k];
                if (temp == this._selected) {
                    continue;
                }
                if (this.isHit(this._selected, temp)) {
                    this._over = temp;
                    temp.scaleX = temp.scaleY = 1.1;
                }
            }
        }
    };
    __egretProto__.isHit = function (a, b) {
        var ra = a.getBounds(null, true);
        ra.x = a.x;
        ra.y = a.y;
        var rb = b.getBounds(null, true);
        rb.x = b.x;
        rb.y = b.y;
        return ra.intersects(rb);
    };
    __egretProto__.touchEndHandler = function (e) {
        if (this._selected) {
            if (this._over) {
                if (this._groups[this._selected.name] == this._groups[this._over.name]) {
                    this.removeChild(this._selected);
                    this._mark++;
                    this.checkOver();
                }
                else {
                    //放置到错误的位置
                    var p = this._pos[this._selected.name];
                    this._selected.x = p[0];
                    this._selected.y = p[1];
                    this._selected.scaleX = this._selected.scaleY = 1;
                    this._selected.alpha = 1;
                    this.addChild(this._selected);
                }
            }
            else {
                var p = this._pos[this._selected.name];
                this._selected.x = p[0];
                this._selected.y = p[1];
                this._selected.scaleX = this._selected.scaleY = 1;
                this._selected.alpha = 1;
                this.addChild(this._selected);
            }
        }
        this._selected = null;
    };
    __egretProto__.checkOver = function () {
        if (this._mark == this._imgs.length / 2) {
            GUIManager.showScene(new Result(), { time: this.time, level: this._level });
        }
    };
    __egretProto__.img_touchBeginHandler = function (e) {
        if (null != this._pos[e.currentTarget.name]) {
            this._selected = e.currentTarget;
            this._selected.scaleX = this._selected.scaleY = 1.1;
            this._selected.alpha = 0.5;
            this.addChild(this._selected);
        }
    };
    __egretProto__.dispose = function () {
        this.removeListeners();
    };
    return GameBoard;
})(egret.gui.UIComponent);
GameBoard.prototype.__class__ = "GameBoard";
