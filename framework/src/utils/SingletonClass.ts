/**
 * 单例基类
 */
class SingletonClass {
    static getInstance(...args:any[]){
        let classRef:any = this;
        if(!classRef.instance)
            classRef.instance = new classRef(args);
        return classRef.instance;
    }
}

interface ISingleton{
    instance;
}