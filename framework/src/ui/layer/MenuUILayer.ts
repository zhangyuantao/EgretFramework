/**
 * Created by zyt on 2018/1/6.
 * 菜单界面层
 */
namespace UI {
    export class MenuUILayer extends eui.UILayer implements ILayer{
        layerName:string;
        constructor(){
            super();
            this.layerName = Consts.LayerNames.MenuUILayer;
        }
    }
}

