/**
 * Jing
 * @author 
 *
 */
class Game extends ASkinCom
{
    public topBanner: Top;
    public txtScore: egret.gui.Label;
    public txtLevel: egret.gui.Label;
    public txtTime: egret.gui.Label;
    public playBoard: egret.gui.SkinnableContainer;

    public btnReplay: egret.gui.Button;
    public btnPause: egret.gui.Button;

    public constructor() 
    {
        super(skins.scene.MenuSkin);
    }
}