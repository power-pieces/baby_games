/**
 * Jing
 * @author 
 *
 */
class Rank extends ASkinCom
{
    public topBanner: Top;
    public groupRankItem: egret.gui.Group;

    public constructor() 
    {          
        super(skins.scene.RankSkin);
    }

    public init(): void
    {
        this.topBanner.setContent("探索地球", function (): void
        {
            GUIManager.showScene(new Menu());
        }, this);

        this.groupRankItem.removeAllElements();
    }

    public addListeners(): void
    {
        
    }

    public removeListeners(): void
    {
        
    }

    public dispose(): void
    {
        this.topBanner.dispose();        
        super.dispose();
    }
}