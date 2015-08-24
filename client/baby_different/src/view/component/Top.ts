/**
 *
 * @author 
 *
 */
class Top extends ASkinCom
{
    public txtTitle: egret.gui.Label;
    public btnBack: egret.gui.Button;
    private _onClose: Function;
    public constructor()
    {
        super(skins.component.TopSkin);        
    }

    public setContent(title:string, onClick:Function, thisObj:any): void
    {
        this.txtTitle.text = title;
        if (null != onClick)
        {
            this._onClose = onClick.bind(thisObj);
        }
    }

    public init(): void
    {

    }

    public addListeners(): void
    {
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnBack_touchBegionHandler, this);
    }

    public removeListeners(): void
    {
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnBack_touchBegionHandler, this);
    }

    private btnBack_touchBegionHandler(e:egret.TouchEvent): void
    {
        if (this._onClose)
        {
            this._onClose();
        }
    }
}
