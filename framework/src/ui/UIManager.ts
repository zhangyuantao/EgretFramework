/**
 * Created by zyt on 2018/1/6.
 * UI界面管理
 */
namespace UI {
    export class UIManager {
        /**
         * 添加界面
         */
        add(ui: egret.DisplayObject) {
            let curScene: Scene.SceneBase = Scene.sceneMgr.CurScene;
            if (!curScene) return;
            curScene.add(ui);
        }

        /**
         * 移除ui元素
         */
        remove(ui: egret.DisplayObject) {
            let curScene: Scene.SceneBase = Scene.sceneMgr.CurScene;
            if (!curScene) return;
            curScene.remove(ui);
        }

        /**
         * 获取指定层的当前界面
         */
        getTopFromLayer(layerName: string): IUI {
            let curScene: Scene.SceneBase = Scene.sceneMgr.CurScene;
            if (!curScene) return;
            curScene.getTopFromLayer(layerName);
        }

        /**
         * 关闭指定层的当前界面
         */
        closeTopFromLayer(layerName: string, destroy: boolean = true) {
            let curScene: Scene.SceneBase = Scene.sceneMgr.CurScene;
            if (!curScene) return;
            curScene.closeTopFromLayer(layerName, destroy);
        }
    }

    export let uiManager: UIManager = new UIManager();
}
