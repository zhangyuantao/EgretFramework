namespace Utils{
    export class StageUtils extends SingletonClass implements ISingleton{
        instance:StageUtils;

        static get stage() {
            return egret.MainContext.instance.stage;
        }

        static get stageWidth() {
            return StageUtils.stage.stageWidth;
        }

        static get stageHeight() {
            return StageUtils.stage.stageHeight;
        }
    }
}