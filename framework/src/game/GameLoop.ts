/**
 * Game
 */

namespace Game {
    export class GameLoop {
        constructor() {
            let self = this;
            egret.lifecycle.addLifecycleListener((context) => {
                context.onUpdate = self.onUpdate;
            });
        }

        /**
         * 游戏帧循环
         */
        onUpdate() {
            Scene.sceneMgr.onUpdate();
        }
    }

    export let gameLoop: GameLoop = new GameLoop();
}