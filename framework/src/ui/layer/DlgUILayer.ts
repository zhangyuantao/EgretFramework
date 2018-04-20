/**
 * Created by zyt on 2018/1/6.
 * 对话框界面层
 */

namespace UI {
    import UILayer = eui.UILayer;

    export class DlgUILayer extends UILayer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.DlgUILayer;
        }
    }
}

