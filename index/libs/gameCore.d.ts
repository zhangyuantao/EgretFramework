/**
 * Created by zyt on 2017/12/8.
 * 继承eui.Component界面基类
 * 需要设置皮肤
 */
declare namespace GameCore.UI {
    class UIBase extends eui.Component implements IUI {
        key: string;
        data: any;
        constructor(data: any);
        static show(data?: any): any;
        init(): void;
        onAddToStage(): void;
        show(): void;
        close(destroy?: boolean): void;
        onDestroy(): void;
    }
}
/**
 * Created by zyt on 2018/1/6.
 * UI界面管理
 */
declare namespace GameCore.UI {
    class UIManager {
        private uiMap;
        private m_stage;
        private m_mainLayer;
        private m_menuLayer;
        private m_dlgLayer;
        private m_topLayer;
        private m_guideLayer;
        init(stage: egret.Stage): void;
        readonly stage: egret.Stage;
        readonly stageWidth: number;
        readonly stageHeight: number;
        add(name: string, ui: UIBase): void;
        remove(name: string): void;
        get(name: string): any;
    }
    let uiManager: UIManager;
}
declare class KeyInputHandler {
    static instance: KeyInputHandler;
    static DIR_LEFT: number;
    static DIR_RIGHT: number;
    static DIR_UP: number;
    static DIR_DOWN: number;
    private curDir;
    private constructor();
    private keyHandler(event);
}
/**
 * Created by zyt on 2017/12/8.
 * 对话框界面基类，置于DlgLayer层
 */
declare namespace GameCore.UI {
    class DlgUI extends UIBase {
    }
}
/**
 * Created by zyt on 2017/12/8.
 * 定义UI界面接口
 */
declare namespace GameCore.UI {
    interface IUI {
        key: string;
        data: any;
        init(): any;
        onAddToStage(): any;
        onDestroy(): any;
        show(): any;
        close(destroy: boolean): any;
    }
}
/**
 * Created by zyt on 2017/12/8.
 * 继承egret.Sprite界面基类
 */
declare namespace GameCore.UI {
    class SpriteUIBase extends egret.Sprite implements IUI {
        key: string;
        data: any;
        constructor(data: any);
        static show(data?: any): any;
        init(): void;
        onAddToStage(): void;
        onDestroy(): void;
        show(): void;
        close(destroy?: boolean): void;
    }
}
declare namespace Consts.CellState {
    let Empty: number;
    let Cannot: number;
    let Through: number;
    let NPC: number;
}
/**
 * Game
 */
declare class Game {
    static readonly stage: egret.Stage;
    static readonly stageWidth: number;
    static readonly stageHeight: number;
}
/**
 * Created by zyt on 2018/1/6.
 * 对话框界面层
 */
declare namespace GameCore.UI {
    class DlgLayer extends eui.UILayer {
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 最上层的引导UI层
 */
declare namespace GameCore.UI {
    class GuideLayer extends eui.UILayer {
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 主界面层
 */
declare namespace GameCore.UI {
    class MainLayer extends eui.UILayer {
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 菜单界面层
 */
declare namespace GameCore.UI {
    class MenuLayer extends eui.UILayer {
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 顶部界面层
 */
declare namespace GameCore.UI {
    class TopLayer extends eui.UILayer {
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 通用工具类
 */
declare namespace GameCore {
    class Utils {
        static getClassName(target: any): any;
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         */
        static createBitmapByName(name: string): egret.Bitmap;
    }
}
