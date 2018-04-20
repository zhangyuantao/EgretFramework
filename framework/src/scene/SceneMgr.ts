namespace Scene{
    /**
     * 场景管理
     */
    export class SceneMgr {
        sceneMap: any = {};
        curScene: string;

        /**
         * 当前场景
         * @returns {any}
         * @constructor
         */
        get CurScene(){
            let self = this;
            return self.sceneMap[self.curScene];
        }

        /**
         * 运行or切换场景
         * 注意了：先退出上个场景再进入新场景
         * @param {string} key
         * @param classFactory
         * @param data 数据
         * @param {boolean} onUpdateEnabled 是否要帧循环
         * @param {boolean} destroyCur 是否销毁当前场景
         */
        run(key:string, classFactory:any, data:any = {}, onUpdateEnabled:boolean = false, destroyCur:boolean = true):SceneBase {
            let self = this;

            // 当前场景退出
            let oldScene:SceneBase = self.sceneMap[self.curScene];
            if (oldScene) {
                if(destroyCur) {
                    oldScene.onDestroy();
                    delete self.sceneMap[oldScene.key];
                }
                else
                    oldScene.onExit();
            }

            let scene:SceneBase = self.sceneMap[key];
            if (! scene) {
                scene = new classFactory(data);
                Utils.StageUtils.stage.addChild(scene);
                scene.key = key;
                scene.onUpdateEnabled = onUpdateEnabled;
                self.sceneMap[key] = scene;
            }

            self.curScene = key;
            scene.onEnter();
            return scene;
        }

        /**
         * 帧循环
         */
        onUpdate(){
            let self = this;
            let curScene:SceneBase = self.CurScene;
            if(curScene && curScene.onUpdateEnabled)
                curScene.onUpdate();
        }

        /**
         * 销毁所有场景
         * @param {string} key
         */
        destroyAll(){
            let self = this;
            if(!self.sceneMap) return;
            for (let key in self.sceneMap)
                self.sceneMap[key].onDestroy();
            self.sceneMap = {};
        }
    }
    export let sceneMgr:SceneMgr = new SceneMgr();
}