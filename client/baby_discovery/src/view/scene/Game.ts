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

    private _level: number = 0;
    public constructor(data:any) 
    {
        super(skins.scene.GameSkin);
        this._level = <number>data;
    }

    public init()
    {
        this.topBanner.setContent("探索地球", function (): void
        {
            GUIManager.showScene(new Menu());
        }, this);

        this.txtLevel.text = "关卡：" + this._level;
    }

    public addListeners(): void
    {
        this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    }

    public removeListeners(): void
    {
        this.btnReplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    }

    private btnReplay_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Game(this._level));
    }

    private btnPause_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.showWindow(new PauseWindow());
    }

    public dispose(): void
    {
        this.topBanner.dispose();
        super.dispose();
    }
}