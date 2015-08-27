var LoginCmd = (function (_super) {
    __extends(LoginCmd, _super);
    function LoginCmd() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = LoginCmd.prototype;
    __egretProto__.run = function (id, nickname, pic) {
        var args = {};
        args.id = id;
        args.name = nickname;
        args.pic = pic;
        NetManager.call("login", args, this.onLogin, this, "登陆游戏中...");
    };
    __egretProto__.onLogin = function (data) {
        DC.levels.length = 0;
        var levels = data.levels;
        for (var k in levels) {
            var level = levels[k];
            if (+level.game_id == DC.cfg.game_id) {
                this.addLevel(level);
            }
        }
        NoticeManager.sendNotice(new GameNotice(GameNotice.LOGIN_SUCCESS));
    };
    __egretProto__.addLevel = function (level) {
        level.level = +level.level;
        level.score = +level.score;
        if (DC.levels.length == 0) {
            DC.levels.push(level);
        }
        else if (level.level > DC.levels[DC.levels.length - 1].level) {
            DC.levels.push(level);
        }
        else {
            for (var i = 0; i < DC.levels.length; i++) {
                var temp = DC.levels[i];
                if (temp.level > level.level) {
                    DC.levels.splice(i, 0, level);
                }
            }
        }
    };
    return LoginCmd;
})(ACmd);
LoginCmd.prototype.__class__ = "LoginCmd";
//# sourceMappingURL=LoginCmd.js.map