class Satellite extends egret.Sprite
{
    private _speed: number = 0;
    private _offY: number = 0;
    public data: any = null;
    public constructor(speed:number, offY:number, data:any) 
    {
        super();
        this._speed = speed;
        this._offY = offY;
        this.data = data;
        this.init();
    }

    private init(): void
    {
        this.touchEnabled = true;
        this.touchChildren = true;

        var bmd: egret.Bitmap = ResUtil.createBitmap("rank_1_png");
        bmd.anchorX = 0.5;
        bmd.anchorY = 1;
        bmd.y = -this._offY;
        
        this.addChild(bmd);
    }

    public addListeners(): void
    {
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
    }

    public removeListeners(): void
    {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
    }

    private enterFrameHandler(e: egret.Event): void
    {
        this.rotation += this._speed;
    }

    public dispose(): void
    {
        this.removeListeners();
    }
}