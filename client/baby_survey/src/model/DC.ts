/**
* 数据中心
*/
class DC
{
    //舞台
    public static stage: egret.Stage = null;
    //配置文件
    public static cfg: any = null;
    //关卡配置
    public static levelCfg: any = null;
    //用户id
    public static id: string = "test_0";
    //用户名称
    public static name: string = "test_0";
    //用户图片
    public static pic: string = "";
    //关卡
    public static levels: any[] = [];
    //游戏是否暂停了
    public static isPause: boolean = false;





    //获取总分
    public static getTotalScore():number
    {
        var score: number = 0;
        for (var k in this.levels)
        {
            score += this.levels[k].score;
        }
        return score;
    }
} 