class PauseWindow extends ASkinCom
{
    public btnContinue: egret.gui.Button;
    public btnMenu: egret.gui.Button;

    public constructor() 
    {
        super(skins.window.PauseMenuSkin);
    }

    public init()
    {
        DC.isPause = true;
    }

    public addListeners(): void
    {
        this.btnContinue.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnContinue_touchBeginHandler, this);
        this.btnMenu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
    }

    public removeListeners(): void
    {
        this.btnContinue.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnContinue_touchBeginHandler, this);
        this.btnMenu.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
    }

    private btnContinue_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.closeWindow(this);
    }

    private btnMenu_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.closeAllWindow();
        GUIManager.showScene(new Menu());
    }

    public dispose(): void
    {
        DC.isPause = false;
        super.dispose();
    }
}