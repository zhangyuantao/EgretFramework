/**
 * Created by zyt on 2018/4/17.
 * eui界面层,包裹所有UILayer
 */
namespace UI {
    export class EUILayer extends eui.UILayer{
        constructor(){
            super();
            this.touchThrough = true;
            this.touchEnabled = false;
        }
    }
}

