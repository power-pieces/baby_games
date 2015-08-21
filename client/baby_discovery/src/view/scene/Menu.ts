/**
 * Jing
 * @author 
 *
 */
class Menu extends ASkinCom
{
    public topBanner: Top;
    public txtScore: egret.gui.Label;
    public btnRank: egret.gui.Button;
    public levelMap: LevelMap;

    public constructor() 
    {
        super(skins.scene.MenuSkin);        
    }

    public init(): void
    {
        this.topBanner.setContent("探索地球", function (): void
        {
            GUIManager.showScene(new Index());
        }, this);

        this.txtScore.text = "积分：0";
        this.levelMap.update();
    }

    public addListeners(): void
    {
        this.btnRank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBegionHandler, this);
    }

    public removeListeners(): void
    {
        this.btnRank.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBegionHandler, this);
    }

    public dispose(): void
    {
        this.topBanner.dispose();
        this.levelMap.dispose();
        super.dispose();
    }

    private btnRank_touchBegionHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Rank());
    }
}
