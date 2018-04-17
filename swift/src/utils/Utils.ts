/**
 * Created by zyt on 2018/1/6.
 * 通用工具类
 */
namespace Swift{
    export class Utils{
        static getClassName(target:any){
            return target.__proto__.__class__;
        }

        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         */
        static createBitmapByName(name: string) {
            let result = new egret.Bitmap();
            let texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }
    }
}
