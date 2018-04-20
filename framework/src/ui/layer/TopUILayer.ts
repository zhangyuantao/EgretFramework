/**
 * Created by zyt on 2018/1/6.
 * 顶部界面层
 */
namespace UI {
    export class TopUILayer extends eui.UILayer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.TopUILayer;
        }
    }
}

