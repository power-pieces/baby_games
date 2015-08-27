var GetRankCmd = (function (_super) {
    __extends(GetRankCmd, _super);
    function GetRankCmd() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = GetRankCmd.prototype;
    __egretProto__.run = function (id) {
        var args = {};
        args.id = id;
        NetManager.call("get_rank", args, this.onResponse, this, "正在获取排行...");
    };
    __egretProto__.onResponse = function (data) {
        NoticeManager.sendNotice(new GameNotice(GameNotice.GOT_RANK, data));
    };
    return GetRankCmd;
})(ACmd);
GetRankCmd.prototype.__class__ = "GetRankCmd";
//# sourceMappingURL=GetRankCmd.js.map