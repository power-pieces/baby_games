/**
 *
 * @author 
 *
 */
class Level extends ASkinCom
{
    public imgLevel: egret.gui.UIAsset;
    public imgStar0: egret.gui.UIAsset;
    public imgStar1: egret.gui.UIAsset;
    public imgStar2: egret.gui.UIAsset;

    private _vo: any = null;

    public constructor() 
    {
        super(skins.component.LevelSkin);        
    }

    //设置关卡信息
    public setLevel(vo:any):void
    {
        this._vo = vo;
        this.update();
    }

    public update():void
    {
        if (null == this._vo)
        {
            //没玩的关卡
            this.visible = false;
        }
        else
        {
            //可玩的关卡
            this.visible = true;
        }
    }

    public addListeners(): void
    {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
    }

    public removeListeners(): void
    {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
    }

    private touchTapHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Game(this._vo.level));        
    }
}
