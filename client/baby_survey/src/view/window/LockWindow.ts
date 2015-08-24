/**
 *
 * @author 
 *
 */
class LockWindow extends ASkinCom
{    
    private _content: string;
    public txtContent: egret.gui.Label = null;
    
    public constructor(content:string) 
    {
        super(skins.window.LockWindowSkin);
        this._content = content;
    }

    public setContent(content: string)
    {
        this._content = content;
        this.txtContent.text = this._content;
    }

    public onSetData(): void
    {
        if (this.data != null)
        {
            this.setContent(this.data);
        }
    }

    public init()
    {
        this.txtContent.text = this._content;
    }
}
