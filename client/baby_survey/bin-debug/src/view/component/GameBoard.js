var GameBoard = (function (_super) {
    __extends(GameBoard, _super);
    function GameBoard(level) {
        _super.call(this);
        this.HEIGHT = 550;
        this.time = 0;
        this._answers = [];
        this._level = level;
        this.init();
        this.touchEnabled = true;
        this.touchChildren = true;
    }
    var __egretProto__ = GameBoard.prototype;
    __egretProto__.init = function () {
        var data = DC.levelCfg["level" + this._level];
        this._img = ResUtil.createBitmap(data.pic);
        this._img.x = (DC.stage.stageWidth - this._img.width) / 2;
        this._img.y = 0;
        this.addChild(this._img);
        this._earth = ResUtil.createBitmap("box_jpg");
        this._earth.anchorX = this._earth.anchorY = 0.5;
        this._earth.x = DC.stage.stageWidth / 2;
        this._earth.y = this.HEIGHT;
        this.addChild(this._earth);
        var baseV = (Math.random() * 1) + 0.1;
        var vector = Math.random() * 10;
        if (vector < 5) {
            baseV = -baseV;
        }
        var m = [1, 1.2, 1.4];
        var pos = [100, 200, 300];
        for (var i = 0; i < 3; i++) {
            var sate = new Satellite(baseV * m[i], pos[i], false);
            sate.x = this._earth.x;
            sate.y = this._earth.y;
            this.addChild(sate);
            this._answers.push(sate);
        }
        this.addListeners();
    };
    __egretProto__.addListeners = function () {
        for (var k in this._answers) {
            var sate = this._answers[k];
            sate.addListeners();
            sate.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.sate_touchBeginHandler, this);
        }
    };
    __egretProto__.removeListeners = function () {
        for (var k in this._answers) {
            var sate = this._answers[k];
            sate.removeListeners();
            sate.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.sate_touchBeginHandler, this);
        }
    };
    __egretProto__.sate_touchBeginHandler = function (e) {
        this.removeListeners();
        var sate = e.currentTarget;
        DC.stage.touchEnabled = false;
        egret.setTimeout(function (sate) {
            DC.stage.touchEnabled = true;
            if (sate.data) {
                GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: true });
            }
            else {
                GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: false });
            }
        }, this, 1000, sate);
    };
    __egretProto__.dispose = function () {
        this.removeListeners();
    };
    return GameBoard;
})(egret.gui.UIComponent);
GameBoard.prototype.__class__ = "GameBoard";
//# sourceMappingURL=GameBoard.js.map