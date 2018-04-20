/**
 * Created by zyt on 2017/12/8.
 * 定义UI界面接口
 */
namespace UI {
    export interface IUI{
        key:string;
        data:any;
        isPause:boolean;

        // 实例化
        onCreate();

        // 进入（添加到）舞台
        onEnter();

        // 销毁界面
        onDestroy();

        // 显示界面
        show();

        // 关闭界面
        close(destroy:boolean);

        // 暂停
        pause();

        // 恢复
        resume();
    }
}
