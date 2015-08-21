/**
* 数据中心
*/
class DC
{
    //配置文件
    public static cfg: any = null;
    //用户id
    public static id: string = "test_0";
    //用户名称
    public static name: string = "test_0";
    //用户图片
    public static pic: string = "";
    //关卡
    public static levels: any[] = [];





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