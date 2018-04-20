/**
 * Created by zyt on 2018/1/6.
 * 通用工具类
 */
namespace Utils{
    /**
     * 获取对象类名
     * @param target
     * @returns {any}
     */
    export function getClassName(target:any){
        return target.__proto__.__class__;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 等待一段时间的async实现
     * @param {number} timeout 单位毫秒
     * @returns {Promise<any>}
     */
    export async function waitTime(timeout:number){
        return new Promise((resolve) => {
            setTimeout(resolve, timeout);
        });
    }
}
