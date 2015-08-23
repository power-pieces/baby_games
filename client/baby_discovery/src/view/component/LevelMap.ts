/**
 *
 * @author 
 *
 */
class LevelMap extends ASkinCom
{
    public levels: any = {};

    public constructor() 
    {
        super(skins.component.LevelMapSkin);
    }

    public init()
    {

    }

    public update(): void
    {
        for (var k in DC.levels)
        {
            var levelVO: any = DC.levels[k];
            var level: Level = <Level>this.levels["level" + k];
            level.setLevel(levelVO);
        }


        //解锁的关卡
        var level: Level = <Level>this.levels["level" + DC.levels.length];
        level.setLevel({ level: DC.levels.length + 1, score: 0 });
    }

    public partAdded(partName: string, instance: any): void
    {
        this.levels[partName] = instance;
        (<Level>instance).setLevel(null);
    }
}
