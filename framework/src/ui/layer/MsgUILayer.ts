/**
 * Created by zyt on 2018/1/6.
 * 消息UI层
 */
namespace UI {
    export class MsgUILayer extends eui.UILayer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.MsgUILayer;
        }
    }
}

