class GameBoard extends egret.gui.UIComponent
{
    private _level: number;
    private _groups: any = {};
    private _pos: any = {};
    private _imgs: egret.Bitmap[] = [];
    
    private _selected: egret.Bitmap = null;
    private _over: egret.Bitmap = null;

    private _mark: number = 0;

    public time: number = 0;

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
        this.addListeners();
        var positins: any[] = DC.cfg.positions;
        positins = positins.concat();
        var data: any[] = DC.levelCfg["level" + this._level];
        for (var i = 0; i < data.length; i++)
        {
            var group: any[] = data[i];
            var img0: egret.Bitmap = ResUtil.createBitmap(group[0]);
            var img1: egret.Bitmap = ResUtil.createBitmap(group[1]);
            img0.name = "group" + i + "_" + 0;
            img1.name = "group" + i + "_" + 1;
            this._groups[img0.name] = i;
            this._groups[img1.name] = i;

            var p: any[] = positins.shift();
            //img0.anchorX = img0.anchorY = 0.5;
            img0.x = p[0];
            img0.y = p[1];
            this._pos[img0.name] = p;
            
            p = positins.shift();
            //img1.anchorX = img1.anchorY = 0.5;
            img1.x = p[0];
            img1.y = p[1];
            this._pos[img1.name] = p;

            this.addChild(img0);
            this.addChild(img1);

            img0.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.img_touchBeginHandler, this);
            img1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.img_touchBeginHandler, this);
            img0.touchEnabled = true;
            img1.touchEnabled = true;

            this._imgs.push(img0);
            this._imgs.push(img1);
        }
    }

    public addListeners(): void
    {
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHandler, this);
    }

    public removeListeners(): void
    {
        for (var k in this._pos)
        {
            k.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.img_touchBeginHandler, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHandler, this);        
    }

    private touchMoveHandler(e: egret.TouchEvent): void
    {
        if (null != this._selected)
        {
            this._selected.x = e.localX - this._selected.width / 2;
            this._selected.y = e.localY - this._selected.height / 2;

            if (this._over != null)
            {
                this._over.scaleX = this._over.scaleY = 1;
                this._over = null;
            }

            for (var k in this._imgs)
            {
                var temp: egret.Bitmap = this._imgs[k];
                if (temp == this._selected)
                {
                    continue;
                }

                if (this.isHit(this._selected, temp))
                {
                    this._over = temp;
                    temp.scaleX = temp.scaleY = 1.1;
                    //if (this._groups[this._selected.name] == this._groups[temp.name])
                    //{
                    //    this.removeChild(this._selected);
                    //    this._selected = null;
                    //    break;
                    //}
                    //else
                    //{
                    //    break;
                    //}
                }                
            }
            
        }
    }

    private isHit(a: egret.Bitmap, b: egret.Bitmap):boolean
    {
        var ra: egret.Rectangle = a.getBounds(null, true);
        ra.x = a.x;
        ra.y = a.y;
        var rb: egret.Rectangle = b.getBounds(null, true);
        rb.x = b.x;
        rb.y = b.y;
        return ra.intersects(rb);
    }


    private touchEndHandler(e: egret.TouchEvent): void
    {
        if (this._selected)
        {
            if (this._over)
            {
                if (this._groups[this._selected.name] == this._groups[this._over.name])
                {
                    this.removeChild(this._selected);  
                    this._mark++;
                    this.checkOver();                  
                }
                else
                {
                    //放置到错误的位置
                }
            }
            else
            {
                var p: any[] = this._pos[this._selected.name];
                this._selected.x = p[0];
                this._selected.y = p[1];
                this._selected.scaleX = this._selected.scaleY = 1;
                this._selected.alpha = 1;
                this.addChild(this._selected);
            }
        }
        this._selected = null;
    }

    private checkOver(): void
    {
        if (this._mark == this._imgs.length / 2)
        {
            GUIManager.showScene(new Result(), this.time);
        }
    }

    private img_touchBeginHandler(e: egret.TouchEvent): void
    {
        if (null != this._pos[e.currentTarget.name])
        {
            this._selected = e.currentTarget;
            this._selected.scaleX = this._selected.scaleY = 1.1;
            this._selected.alpha = 0.5;
            this.addChild(this._selected);
        }       
    }

    public dispose(): void
    {
        this.removeListeners();
    }
} 