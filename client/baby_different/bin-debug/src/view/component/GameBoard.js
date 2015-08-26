var GameBoard = (function (_super) {
    __extends(GameBoard, _super);
    function GameBoard(level) {
        _super.call(this);
        this._txtQ = new egret.TextField();
        this._shape = new egret.Shape();
        this._groups = {};
        this._pos = {};
        this._imgs = [];
        this._matched = [];
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
        this.width = 480;
        this.height = 500;
        this._shape.touchEnabled = false;
        var topPos = DC.cfg.topPos;
        topPos = topPos.concat();
        var bottomPos = ArrayUtil.random(DC.cfg.bottomPos);
        var data = DC.levelCfg["level" + this._level];
        this.addChild(this._txtQ);
        this._txtQ.text = data.question;
        var pics = data.pics;
        for (var i = 0; i < pics.length; i++) {
            var img0 = ResUtil.createBitmap(pics[i]);
            var img1 = ResUtil.createBitmap(pics[i]);
            img0.name = "group" + i + "_" + 0;
            img1.name = "group" + i + "_" + 1;
            this._groups[img0.name] = i;
            this._groups[img1.name] = i;
            var p = topPos.shift();
            //img0.anchorX = img0.anchorY = 0.5;
            img0.x = p[0];
            img0.y = p[1];
            this._pos[img0.name] = p;
            p = bottomPos.shift();
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
        this.addChild(this._shape);
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
        if (null != this._startPoint) {
            var sx = this._startPoint.x;
            var sy = this._startPoint.y;
            var ex = e.localX;
            var ey = e.localY;
            var over = this.getOverTarget(e.localX, e.localY);
            if (over != null) {
                ex = over.x + over.width / 2;
                ey = over.y + over.height / 2;
            }
            this.drawLine(sx, sy, ex, ey);
        }
    };
    __egretProto__.getOverTarget = function (x, y) {
        for (var k in this._imgs) {
            var temp = this._imgs[k];
            if (temp == this._selected) {
                continue;
            }
            if (this._matched.indexOf(temp) > -1) {
                continue;
            }
            if (this.isHitPoint(temp, x, y)) {
                this._over = temp;
                return temp;
            }
        }
        this._over = null;
        return null;
    };
    __egretProto__.isHitPoint = function (bmd, x, y) {
        if (x <= bmd.x + bmd.width && x >= bmd.x && y <= bmd.y + bmd.height && y >= bmd.y) {
            return true;
        }
        return false;
    };
    __egretProto__.touchEndHandler = function (e) {
        this.getOverTarget(e.localX, e.localY);
        if (this._selected && this._over) {
            if (this._groups[this._selected.name] == this._groups[this._over.name]) {
                //是不是第一次连线
                if (this._matched.length == 0) {
                    if (this._imgs[0] == this._selected || this._imgs[0] == this._selected) {
                        //是正确答案
                        this._matched.push(this._selected);
                        this._matched.push(this._over);
                    }
                    else {
                        //不是正确答案，退出游戏
                        GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: false });
                    }
                }
                else {
                    //配对成功
                    this._matched.push(this._selected);
                    this._matched.push(this._over);
                    if (this._matched.length == 6) {
                        GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: true });
                    }
                }
            }
            else if (this._matched.length == 0) {
                //第一次配对就错误，不是正确答案，退出游戏
                GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: false });
            }
        }
        this._selected = this._over = null;
        this._startPoint = null;
        this.updateLines();
    };
    __egretProto__.img_touchBeginHandler = function (e) {
        if (null != this._pos[e.currentTarget.name] && this._matched.indexOf(e.currentTarget) == -1) {
            this._selected = e.currentTarget;
            var x = this._selected.x + (this._selected.width >> 1);
            var y = this._selected.y + (this._selected.height >> 1);
            this._startPoint = new egret.Point(x, y);
        }
    };
    __egretProto__.updateLines = function () {
        var g = this._shape.graphics;
        g.clear();
        g.lineStyle(10, 0x00FF00);
        for (var i = 0; i < this._matched.length; i += 2) {
            g.moveTo(this._matched[i].x + this._matched[i].width / 2, this._matched[i].y + this._matched[i].height / 2);
            g.lineTo(this._matched[i + 1].x + this._matched[i + 1].width / 2, this._matched[i + 1].y + this._matched[i + 1].height / 2);
        }
        g.endFill();
    };
    __egretProto__.drawLine = function (sx, sy, ex, ey) {
        var g = this._shape.graphics;
        this.updateLines();
        g.lineStyle(10, 0xFF0000);
        g.moveTo(sx, sy);
        g.lineTo(ex, ey);
        g.endFill();
    };
    __egretProto__.dispose = function () {
        this.removeListeners();
    };
    return GameBoard;
})(egret.gui.UIComponent);
GameBoard.prototype.__class__ = "GameBoard";
//# sourceMappingURL=GameBoard.js.map