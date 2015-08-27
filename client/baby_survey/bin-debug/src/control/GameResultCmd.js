var GameResultCmd = (function (_super) {
    __extends(GameResultCmd, _super);
    function GameResultCmd() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = GameResultCmd.prototype;
    __egretProto__.run = function (id, game_id, level, score) {
        var args = {};
        args.id = id;
        args.game_id = game_id;
        args.level = level;
        args.score = score;
        NetManager.implicitCall("game_result", args);
    };
    return GameResultCmd;
})(ACmd);
GameResultCmd.prototype.__class__ = "GameResultCmd";
//# sourceMappingURL=GameResultCmd.js.map