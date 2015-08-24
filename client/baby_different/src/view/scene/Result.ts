/**
 * Jing
 * @author 
 *
 */
class Result extends ASkinCom
{
    public topBanner: Top;
    public txtScore: egret.gui.Label;
    public btnRank: egret.gui.Button;
    public imgFace: egret.gui.UIAsset;

    public btnMenu: egret.gui.Button;
    public btnReplay: egret.gui.Button;
    public btnNext: egret.gui.Button;


    public txtGetScore: egret.gui.Label;
    public txtTime: egret.gui.Label;

    public imgStar0: egret.gui.UIAsset;
    public imgStar1: egret.gui.UIAsset;
    public imgStar2: egret.gui.UIAsset;

    private _state: string = "win";
    public constructor() 
    {
        super(skins.scene.ResultSkin);
    }

    public init()
    {
        var score: number = this.getScore();

        if (DC.levels.length > this.data.level - 1)
        {
            var vo: any = DC.levels[this.data.level - 1];
            if (score > vo.score)
            {
                vo.score = score;
                //发送到服务器
                new GameResultCmd().run(DC.id, DC.cfg.game_id, this.data.level, score);
            }
        }
        else
        {
            DC.levels[this.data.level - 1] = { level: this.data.level, score: score };
            //发送到服务器
            new GameResultCmd().run(DC.id, DC.cfg.game_id, this.data.level, score);
        }

    

        this.txtScore.text = "积分：" + DC.getTotalScore();

        this.topBanner.setContent("探索地球", function (): void
        {
            GUIManager.showScene(new Menu());
        }, this);

        if (10 == score)
        {
            this._state = "fail";
            this.txtGetScore.text = "分数：" + score;
        }

        this.imgStar0.visible = false;
        this.imgStar1.visible = false;
        this.imgStar2.visible = false;

        if (score >= 100)
        {
            this.imgStar0.visible = true;
        }
        if (score >= 200)
        {
            this.imgStar1.visible = true;
        }
        if (score >= 300)
        {
            this.imgStar2.visible = true;
        }        

        this.txtTime.text = "时间：" + this.data.time + "秒";


    }

    private getScore(): number
    {
        if (this.data.time <= 5)
        {
            return 300;
        }
        else if (this.data.time <= 10)
        {
            return 200;
        }
        else if (this.data.time <= 15)
        {
            return 100;
        }
        else
        {
            return 10;
        }
    }

    public addListeners(): void
    {
        this.btnMenu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
        this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnNext_touchBeginHandler, this);
        this.btnRank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBeginHandler, this);
    }

    public removeListeners(): void
    {
        this.btnMenu.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
        this.btnReplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnNext.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnNext_touchBeginHandler, this);
        this.btnRank.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBeginHandler, this);
    }

    private btnRank_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Rank());
    }

    private btnNext_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Game(this.data.level + 1));
    }

    private btnReplay_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Game(this.data.level));
    }

    private btnMenu_touchBeginHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new Menu());
    }

    public dispose(): void
    {        
        super.dispose();
    }

    public getCurrentSkinState():string
    {
        return this._state;
    }
}