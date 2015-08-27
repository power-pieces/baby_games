var GameNotice = (function (_super) {
    __extends(GameNotice, _super);
    function GameNotice(type, data) {
        if (data === void 0) { data = null; }
        _super.call(this, type, data);
    }
    var __egretProto__ = GameNotice.prototype;
    //登陆成功
    GameNotice.LOGIN_SUCCESS = "login_success";
    //获取到排行榜
    GameNotice.GOT_RANK = "got_rank";
    return GameNotice;
})(Notice);
GameNotice.prototype.__class__ = "GameNotice";
