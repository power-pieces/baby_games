class GetRankCmd extends ACmd
{
    public run(id: string): void
    {
        var args: any = {};
        args.id = id;
        NetManager.call("get_rank", args, this.onResponse, this, "正在获取排行...");
    }

    private onResponse(data: any): void
    {
        NoticeManager.sendNotice(new GameNotice(GameNotice.GOT_RANK, data));
    }
}