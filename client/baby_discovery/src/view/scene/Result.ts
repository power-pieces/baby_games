/**
 * Jing
 * @author 
 *
 */
class Result extends ASkinCom
{
    public topBanner: Top;
    public txtScore: egret.gui.Label;
    public btnRank: egret.gui.Button;
    public imgFace: egret.gui.UIAsset;

    public btnMenu: egret.gui.Button;
    public btnReplay: egret.gui.Button;
    public btnNext: egret.gui.Button;


    public txtGetScore: egret.gui.Label;
    public txtTime: egret.gui.Label;

    public imgStar0: egret.gui.UIAsset;
    public imgStar1: egret.gui.UIAsset;
    public imgStar2: egret.gui.UIAsset;


    public constructor() 
    {
        super(skins.scene.MenuSkin);
    }
}