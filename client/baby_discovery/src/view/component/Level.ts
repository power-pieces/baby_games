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

    private _level: number = -1;

    public constructor() 
    {
        super(skins.component.LevelSkin);        
    }

    //设置关卡信息
    public setLevel(level:number):void
    {

    }

    public update():void
    {
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
        GUIManager.showScene(new Game(this._level));        
    }
}
