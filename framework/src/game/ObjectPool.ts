
class ObjectPool {


    constructor() {
        egret.Ticker.getInstance().register(this.onEnterFrame, this);
    }

    private onEnterFrame(advancedTime:number):void {
        var list = this._list.concat();
        for (var i = 0 , length = list.length; i < length; i++) {
            var obj:GameObject = list[i];
            obj.onEnterFrame(advancedTime);
        }
    }

    private _pool = {};

    private _list:Array<any> = [];

    public createObject(classFactory:any):GameObject {
        var result;
        var key = classFactory.key;
        var arr = this._pool[key];
        if (arr != null && arr.length) {
            result = arr.shift();
        }
        else {
            result = new classFactory();
            result.key = key;
        }
        result.onCreate();
        this._list.push(result);
        return result;
    }

    public destroyObject(obj:GameObject) {
        var key = obj.key;
        if (this._pool[key] == null) {
            this._pool[key] = [];
        }
        this._pool[key].push(obj);
        obj.onDestroy();
        var index = this._list.indexOf(obj);
        if (index != -1) {
            this._list.splice(index, 1);
        }
    }

    private static instance:ObjectPool;

    public static getInstance():ObjectPool {
        if (ObjectPool.instance == null) {
            ObjectPool.instance = new ObjectPool();
        }
        return ObjectPool.instance;
    }
}
