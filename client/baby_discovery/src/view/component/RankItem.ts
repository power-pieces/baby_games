/**
 *
 * @author 
 *
 */
class RankItem extends ASkinCom
{
    public imgRank: egret.gui.UIAsset;
    public imgHead: egret.gui.UIAsset;
    public txtName: egret.gui.Label;
    public txtScore: egret.gui.Label;

    public constructor() 
    {
        super(skins.component.RankItemSkin);
    }

    public setInfo(rank:number, pic:string, name:string, score:number): void
    {
    }
}
