/**
 * Created by zyt on 2018/1/6.
 * UI界面管理
 */
namespace GameCore.UI {
    export class UIManager{
        private m_uiStackMap:any; // 维护每个层级的ui栈

        private m_stage:egret.Stage;
        private m_mainLayer:LayerBase;
        private m_menuLayer:LayerBase;
        private m_dlgLayer:LayerBase;
        private m_topLayer:LayerBase;
        private m_guideLayer:LayerBase;

        /**
         * ui系统初始化
         * @param {egret.Stage} stage
         */
        init(stage:egret.Stage) {
            let self = this;
            self.m_stage = stage;

            // 初始化界面层
            self.m_mainLayer = new MainLayer();
            self.m_menuLayer = new MenuLayer();
            self.m_dlgLayer = new DlgLayer();
            self.m_topLayer = new TopLayer();
            self.m_guideLayer = new GuideLayer();

            stage.addChild(self.m_mainLayer);
            stage.addChild(self.m_menuLayer);
            stage.addChild(self.m_dlgLayer);
            stage.addChild(self.m_topLayer);
            stage.addChild(self.m_guideLayer);

            self.m_mainLayer.touchThrough = true;
            self.m_menuLayer.touchThrough = true;
            self.m_dlgLayer.touchThrough = true;
            self.m_topLayer.touchThrough = true;
            self.m_guideLayer.touchThrough = true;

            // 为每层初始化ui栈
            self.m_uiStackMap = {}
            self.m_uiStackMap[self.m_mainLayer.layerName] = [];
            self.m_uiStackMap[self.m_menuLayer.layerName] = [];
            self.m_uiStackMap[self.m_dlgLayer.layerName] = [];
            self.m_uiStackMap[self.m_topLayer.layerName] = [];
            self.m_uiStackMap[self.m_guideLayer.layerName] = [];
        }

        get stage(){
            return this.m_stage;
        }

        get stageWidth(){
            return this.m_stage.stageWidth;
        }

        get stageHeight(){
            return this.m_stage.stageHeight;
        }

        get mainLayer(){
            return this.m_mainLayer;
        }

        get dlgLayer(){
            return this.m_dlgLayer;
        }

        get menuLayer(){
            return this.m_menuLayer;
        }

        get guideLayer(){
            return this.m_guideLayer;
        }

        get topLayer(){
            return this.m_topLayer;
        }

        getUISatck(layerName:string){
            return this.m_uiStackMap[layerName];
        }

        /**
         * 添加界面
         * @param {egret.DisplayObject} ui
         */
        add(ui:egret.DisplayObject){
            let self = this;
            let targetLayer;
            if (ui instanceof DlgUI)
                targetLayer = self.m_dlgLayer;
            else
                targetLayer = self.m_mainLayer;

            self.addToLayer(targetLayer, ui);
        }

        /**
         * 添加UI元素到指定层
         * @param {GameCore.UI.LayerBase} layer
         * @param {egret.DisplayObject} ui
         */
        addToLayer(layer:LayerBase, ui:egret.DisplayObject){
            let self = this;
            layer.addChild(ui);

            let stack = self.getUISatck(layer.layerName);

            // 当前界面暂停
            if(stack.length){
                let curUI:IUI = stack[stack.length - 1];
                curUI.pause();
            }

            // 压入新界面
            stack.push(ui);
        }

        /**
         * 移除ui元素
         * @param {egret.DisplayObject} ui
         */
        remove(ui:egret.DisplayObject){
            let self = this;
            let layer:LayerBase = <LayerBase>ui.parent;
            if(layer) layer.removeChild(ui);
            ui = null;

            let stack = self.getUISatck(layer.layerName);
            stack.pop(); // 当前界面出栈

            // 恢复上个界面
            if(stack.length){
                let lastUI:IUI = stack[stack.length - 1];
                lastUI.resume();
            }
        }

        /**
         * 获取指定层的当前界面
         * @param {string} name
         * @returns {GameCore.UI.IUI}
         */
        getTopFromLayer(layer:LayerBase):IUI{
            let self = this;
            let stack = self.getUISatck(layer.layerName);
            if (! stack || !stack.length) return null;
            return stack[stack.length - 1];
        }

        /**
         * 关闭指定层的当前界面
         * @param {GameCore.UI.LayerBase} layer
         * @param {boolean} destroy 是否要移除界面
         */
        closeTopFromLayer(layer:LayerBase, destroy:boolean = true){
            let self = this;
            let ui:IUI = self.getTopFromLayer(layer);
            if(ui) ui.close(destroy);
        }

    }
    export let uiManager:UIManager = new UIManager();
}
