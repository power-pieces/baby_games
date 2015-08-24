class GameResultCmd extends ACmd
{
    public run(id:string, game_id:number, level:number, score:number): void
    {
        var args: any = {};
        args.id = id;
        args.game_id = game_id;
        args.level = level;
        args.score = score;
        NetManager.implicitCall("game_result", args);
    }
} 