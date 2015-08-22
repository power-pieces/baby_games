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

    public gameBoard: GameBoard;

    public btnReplay: egret.gui.Button;
    public btnPause: egret.gui.Button;

    private _level: number = 0;

    private _time: number = 0;

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
        this.txtScore.text = "积分：" + DC.getTotalScore();
        this.gameBoard = new GameBoard(this._level);
        this.playBoard.addElement(this.gameBoard);
        this._time = 0;
    }

    public addListeners(): void
    {
        egret.Ticker.getInstance().register(this.tickerHandler, this);
        this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    }

    public removeListeners(): void
    {
        egret.Ticker.getInstance().unregister(this.tickerHandler, this);
        this.btnReplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    }

    private tickerHandler(dt): void
    {
        if (false == DC.isPause)
        {
            this._time += dt;
            var secs: number = (this._time / 1000) >> 0;
            this.txtTime.text = "时间：" + secs + "秒";
            this.gameBoard.time = secs;
        }
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