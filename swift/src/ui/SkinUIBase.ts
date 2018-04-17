/**
 * Created by zyt on 2017/12/8.
 * 继承eui.Component界面基类
 * 需要设置皮肤
 */
namespace Swift.UI {
    export class SkinUIBase extends eui.Component implements IUI{
        key:string;
        data:any;
        isPause:boolean;

        constructor(data:any) {
            super();
            let self = this;
            let className = Utils.getClassName(self);
            self.skinName = className.slice(className.lastIndexOf('.') + 1) + 'Skin';   // 设置皮肤
            self.data = data;

            self.init();

            self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
            self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
        }

        static show(data?:any) {
            let self:any = this;
            let className = self.name;
            let ui = new self(data);
            ui.key = className;
            ui.show();

            // 添加到UI管理
            uiManager.add( ui);

            return ui;
        }

        // 首次初始化
        init(){

        }

        onAddToStage(){}

        // 显示界面
        show(){
            let self = this;
            if (! self.visible)
                self.visible = true;
        }

        // 关闭界面（隐藏） destroy：是否要移除销毁界面
        close(destroy:boolean = true) {
            let self = this;
            if (self.visible)
                self.visible = false;

            if (destroy)
                uiManager.remove(self);
        }

        // 销毁界面
        onDestroy() {
            let self = this;

            // 清除数据缓存
            self.data = null;

            // 移除事件监听
            self.removeEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
            self.removeEventListener(egret.Event.REMOVED_FROM_STAGE, self.onDestroy, self);
        }

        /**
         * 暂停，当打开新界面时当前界面暂停
         */
        pause(){
            let self = this;
            self.isPause = true;
            console.log('pause');
        }

        /**
         * 恢复，当前界面关闭时上个界面恢复
         */
        resume(){
            let self = this;
            self.isPause = false;
            console.log('resume');
        }
    }
}
