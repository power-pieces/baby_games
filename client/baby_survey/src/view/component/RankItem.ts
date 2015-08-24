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

    private _rank:number;
    private _pic: string;
    private _name: string;
    private _score: number;

    public constructor() 
    {
        super(skins.component.RankItemSkin);
    }

    public setInfo(rank:number, pic:string, name:string, score:number): void
    {
        this._rank = rank;
        this._pic = pic;
        this._name = name;
        this._score = score;
        if (this.created)
        {
            this.init();
        }
    }

    public init(): void
    {
        //重写该代码来完成初始化
        this.txtName.text = this._name;
        this.txtScore.text = "" + this._score;
    }
}
