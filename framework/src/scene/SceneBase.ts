namespace Scene{
    import DisplayObjectContainer = egret.DisplayObjectContainer;

    export interface IScene {
        data:any;
        key:string;
        layerMap:any;
        uiStackMap:any;
        onUpdateEnabled:boolean;
        onCreate();
        onEnter();
        onUpdate();
        onExit();
        onDestroy();
    }

    /**
     * 场景基类
     */
    export class SceneBase extends eui.UILayer implements IScene{
        data:any;
        key:string;
        layerMap:any;
        onUpdateEnabled:boolean;
        uiStackMap:any; // 维护每个层级的ui栈

        constructor(data?:any){
            super();
            let self = this;
            self.data = data;
            self.onCreate();
        }

        /**
         * 静态run方法
         */
        static run(data:any = {}, onUpdateEnabled:boolean = false, destroyCur:boolean = true):SceneBase {
            let classFactory:any = this;
            return sceneMgr.run(classFactory.name, classFactory, data, onUpdateEnabled, destroyCur);
        }

// 生命周期 START

        /**
         * 实例化
         */
        onCreate(){
            let self = this;
            self.layerMap = {};
            self.uiStackMap = {};
            self.initLayer();
        }

        /**
         * 初始化界面层，默认7层
         */
        initLayer(layerClasses:any[] = [
            UI.BaseLayer,
            UI.MainUILayer,
            UI.MenuUILayer,
            UI.DlgUILayer,
            UI.MsgUILayer,
            UI.GuideUILayer,
            UI.TopUILayer
        ]) {
            let self = this;
            let euiLayer = new UI.EUILayer();
            for (let i = 0, l_i = layerClasses.length; i < l_i; i++) {
                let classRef = layerClasses[i];
                let layer = new classRef();
                layer.touchThrough = true;
                self.layerMap[layer.layerName] = layer;
                self.uiStackMap[layer.layerName] = []; // 为每层初始化ui栈
                if (layer instanceof UI.BaseLayer)
                    self.addChildAt(layer, 0);
                else
                    euiLayer.addChild(layer);
            }
            self.addChildAt(euiLayer, 1);
        }

        /**
         * 进入
         * @param param
         */
        onEnter(){
            let self = this;
            self.visible = true;
            self.touchEnabled = true;

            console.log(self.key + "->enter");
        }

        /**
         * 帧循环
         */
        onUpdate(){

        }

        /**
         * 退出
         */
        onExit(){
            let self = this;
            self.visible = false;
            self.touchEnabled = false;

            console.log(self.key + "->exit");
        }

        /**
         * 销毁
         */
        onDestroy(){
            let self = this;

            // 先退出
            self.onExit();

            // 遍历每个层级的UI，执行其onDestroy()
            let tmpLayer;
            let tmpUI;
            for(let key in self.layerMap){
                tmpLayer = self.layerMap[key];
                for(let j = 0, l_j = tmpLayer.numElements; j < l_j; j++) {
                    tmpUI = tmpLayer.getElementAt(j);
                    tmpUI.onDestroy();
                }
            }
            self.layerMap = null;
            self.uiStackMap = null;

            // 移除自身
            let parent = self.parent;
            if(!parent) return console.warn('场景没有父节点！');
            parent.removeChild(self);

            console.log(self.key + "->destroy");
        }

// 生命周期 END

        private getUISatck(layerName:string){
            return this.uiStackMap[layerName];
        }

        /**
         * 添加界面
         * @param {egret.DisplayObject} ui
         */
        add(ui:egret.DisplayObject){
            let self = this;
            let targetLayer;
            if (ui instanceof UI.MainUI)
                targetLayer = self.layerMap[Consts.LayerNames.MainUILayer];
            else if (ui instanceof UI.MenuUI)
                targetLayer = self.layerMap[Consts.LayerNames.MenuUILayer];
            else if (ui instanceof UI.DlgUILayer)
                targetLayer = self.layerMap[Consts.LayerNames.DlgUILayer];
            else if (ui instanceof UI.MsgUI)
                targetLayer = self.layerMap[Consts.LayerNames.MsgUILayer];
            else if (ui instanceof UI.GuideUI)
                targetLayer = self.layerMap[Consts.LayerNames.GuideUILayer];
            else if (ui instanceof UI.TopUILayer)
                targetLayer = self.layerMap[Consts.LayerNames.TopUILayer];
            else
                targetLayer = self.layerMap[Consts.LayerNames.BaseLayer];
            self.addToLayer(targetLayer, ui);
        }

        /**
         * 添加UI元素到指定层
         * @param {Swift.UI.LayerBase} layer
         * @param {egret.DisplayObject} ui
         */
        addToLayer(layer:DisplayObjectContainer, ui:egret.DisplayObject){
            let self = this;
            layer.addChild(ui);

            let stack = self.getUISatck((<any>layer).layerName);

            // 当前界面暂停
            if(stack.length){
                let curUI = stack[stack.length - 1];
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
            let layer:any = ui.parent;
            if(layer) layer.removeChild(ui);
            ui = null;

            let stack = self.getUISatck(layer.layerName);
            stack.pop(); // 当前界面出栈

            // 恢复上个界面
            if(stack.length){
                let lastUI = stack[stack.length - 1];
                lastUI.resume();
            }
        }

        /**
         * 获取指定层的当前界面
         * @param {string} layerName
         * @returns {Swift.UI.IUI}
         */
        getTopFromLayer(layerName:string):UI.IUI{
            let self = this;
            let stack = self.getUISatck(layerName);
            if (! stack || !stack.length) return null;
            return stack[stack.length - 1];
        }

        /**
         * 关闭指定层的当前界面
         * @param {string} layerName
         * @param {boolean} destroy 是否要移除界面
         */
        closeTopFromLayer(layerName:string, destroy:boolean = true){
            let self = this;
            let ui = self.getTopFromLayer(layerName);
            if(ui) ui.close(destroy);
        }
    }
}