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
}
