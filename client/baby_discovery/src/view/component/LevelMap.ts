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

    public partAdded(partName: string, instance: any): void
    {
        this.levels[partName] = instance;
    }
}
