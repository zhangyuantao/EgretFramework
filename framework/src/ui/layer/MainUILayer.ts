/**
 * Created by zyt on 2018/1/6.
 * 主容器层
 */
namespace UI {
    export class MainUILayer extends eui.UILayer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.MainUILayer;
        }
    }
}

