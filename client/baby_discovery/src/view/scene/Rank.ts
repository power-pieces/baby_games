/**
 * Jing
 * @author 
 *
 */
class Rank extends ASkinCom
{
    public topBanner: Top;
    public groupRankItem: egret.gui.Group;

    public constructor() 
    {          
        super(skins.scene.RankSkin);
    }

    public init(): void
    {
        new GetRankCmd().run(DC.id);

        this.topBanner.setContent("探索地球", function (): void
        {
            GUIManager.showScene(new Menu());
        }, this);

        this.groupRankItem.removeAllElements();
    }

    public addListeners(): void
    {
        NoticeManager.addNoticeAction(GameNotice.GOT_RANK, this.gotRankNotice, this);
    }

    public removeListeners(): void
    {
        NoticeManager.removeNoticeAction(GameNotice.GOT_RANK, this.gotRankNotice, this);
    }

    private gotRankNotice(n: GameNotice): void
    {
        for (var k in n.data.list)
        {
            var rankVO = n.data.list[k];
            var item:RankItem = new RankItem();
            item.setInfo(k, rankVO.pic, rankVO.name, rankVO.score);
            this.groupRankItem.addElement(item);
        }
    }

    public dispose(): void
    {
        this.topBanner.dispose();        
        super.dispose();
    }
}