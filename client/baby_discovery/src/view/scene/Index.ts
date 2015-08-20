class Index extends ASkinCom
{
    public topBanner: Top;
    public imgLogo: egret.gui.UIAsset;
    public btnEnter:egret.gui.Button;

    public constructor(data: any = null)
    {
        super(skins.scene.IndexSkin);
    }

    public init(): void
    {
        this.topBanner.setContent("探索地球", function (): void
        {
            egret.gui.Alert.show("点击返回！");
        }, this);
    }

    public addListeners(): void
    {
        this.btnEnter.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnEnter_touchBegionHandler, this);
    }

    public removeListeners(): void
    {
        this.btnEnter.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnEnter_touchBegionHandler, this);
    }

    public dispose(): void
    {
        this.topBanner.dispose();
        super.dispose();
    }

    private btnEnter_touchBegionHandler(e: egret.TouchEvent): void
    {        
        GUIManager.showScene(new Menu());
    }

}