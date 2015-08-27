class GameBoard extends egret.gui.UIComponent
{
    private HEIGHT: number = 550;

    private _level: number;
    public time: number = 0;

    private _img: egret.Bitmap;
    private _answers: Satellite[] = [];
    private _earth: egret.Bitmap;

    public constructor(level:number) 
    {
        super();
        this._level = level;
        this.init();
        this.touchEnabled = true;
        this.touchChildren = true;        
    }

    private init(): void
    {
        var data: any = DC.levelCfg["level" + this._level];

        this._img = ResUtil.createBitmap(data.pic);
        this._img.x = (DC.stage.stageWidth - this._img.width) / 2;
        this._img.y = 0;
        this.addChild(this._img);

        this._earth = ResUtil.createBitmap("box_jpg");
        this._earth.anchorX = this._earth.anchorY = 0.5;
        this._earth.x = DC.stage.stageWidth / 2;
        this._earth.y = this.HEIGHT;
        this.addChild(this._earth);

        var baseV: number = (Math.random() * 1) + 0.1;
        var vector: number = Math.random() * 10;
        if (vector < 5)
        {
            baseV = -baseV;
        }
        var m: number[] = [1, 1.2, 1.4];
        var pos: number[] = [100, 200, 300];
        for (var i: number = 0; i < 3; i++)
        {
            var sate: Satellite = new Satellite(baseV * m[i], pos[i], false);            
            sate.x = this._earth.x;
            sate.y = this._earth.y;            
            
            
            this.addChild(sate);
            this._answers.push(sate);
        }

        this.addListeners();
    }

    public addListeners(): void
    {
        for (var k in this._answers)
        {
            var sate: Satellite = this._answers[k];
            sate.addListeners();
            sate.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.sate_touchBeginHandler, this);
        }
    }

    public removeListeners(): void
    {
        for (var k in this._answers)
        {
            var sate: Satellite = this._answers[k];
            sate.removeListeners();
            sate.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.sate_touchBeginHandler, this);
        }
    }

    private sate_touchBeginHandler(e: egret.TouchEvent): void
    {
        this.removeListeners();
        var sate: Satellite = e.currentTarget;
        DC.stage.touchEnabled = false;
        egret.setTimeout(function (sate:Satellite): void
        {
            DC.stage.touchEnabled = true;
           
            if (sate.data)
            {
                GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: true });
            }
            else
            {
                GUIManager.showScene(new Result(), { time: this.time, level: this._level, success: false });
            }
        }, this, 1000, sate);


    }

    public dispose(): void
    {
        this.removeListeners();
    }
} 