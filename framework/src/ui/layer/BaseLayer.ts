/**
 * Created by zyt on 2018/4/17.
 * 基础层，与eui无关
 */
namespace UI {
    export class BaseLayer extends egret.DisplayObjectContainer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.BaseLayer;
        }
    }
}

