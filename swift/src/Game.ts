/**
 * Game
 */
class Game{
    static get stage(){
        return egret.MainContext.instance.stage;
    }

    static get stageWidth(){
        return Game.stage.stageWidth;
    }

    static get stageHeight(){
        return Game.stage.stageHeight;
    }
}