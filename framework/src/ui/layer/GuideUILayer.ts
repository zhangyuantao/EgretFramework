/**
 * Created by zyt on 2018/1/6.
 * 最上层的引导UI层
 */
namespace UI {
    export class GuideUILayer extends eui.UILayer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.GuideUILayer;
        }
    }
}

