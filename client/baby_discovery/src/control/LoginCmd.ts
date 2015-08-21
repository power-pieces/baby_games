class LoginCmd extends ACmd
{
    public run(id: string, nickname: string, pic: string): void
    {
        var args: any = {};
        args.id = id;
        args.name = nickname;
        args.pic = pic;
        NetManager.call("login", args, this.onLogin, this, "登陆游戏中...");
    }

    private onLogin(data:any): void
    {       
        DC.levels.length = 0;
        var levels: any[] = data.levels;
        for (var k in levels)
        {
            var level = levels[k];
            if (+level.game_id == DC.cfg.game_id)
            {
                this.addLevel(level);
            }
        }
        NoticeManager.sendNotice(new GameNotice(GameNotice.LOGIN_SUCCESS));
    }

    private addLevel(level:any): void
    {
        level.level = +level.level;
        level.score = +level.score;

        if (DC.levels.length == 0)
        {
            DC.levels.push(level);
        }
        else if (level.level > DC.levels[DC.levels.length - 1].level)
        {
            DC.levels.push(level);
        }
        else
        {
            for (var i: number = 0; i < DC.levels.length; i++)
            {
                var temp: any = DC.levels[i];
                if (temp.level > level.level)
                {
                    DC.levels.splice(i, 0, level);
                }
            }
        }
    }
}