/**
 * Created by zyt on 2017/12/8.
 * 继承eui.Component界面基类
 * 需要设置皮肤
 */
declare namespace Swift.UI {
    class SkinUIBase extends eui.Component implements IUI {
        key: string;
        data: any;
        isPause: boolean;
        constructor(data: any);
        static show(data?: any): any;
        init(): void;
        onAddToStage(): void;
        show(): void;
        close(destroy?: boolean): void;
        onDestroy(): void;
        /**
         * 暂停，当打开新界面时当前界面暂停
         */
        pause(): void;
        /**
         * 恢复，当前界面关闭时上个界面恢复
         */
        resume(): void;
    }
}
/**
 * Created by zyt on 2018/4/17.
 */
declare namespace Swift.UI {
    class LayerBase extends eui.UILayer implements ILayer {
        layerName: string;
    }
}
/**
 * 摇杆
 */
declare namespace Swift.UI {
    class Joystick extends eui.Component {
        private radius;
        private tray;
        private handle;
        private curAngle;
        constructor();
        private onAddToStage();
        private onTouchBegin(event);
        private onTouchMove(event);
        private onTouchEnd();
    }
}
/**
 * Created by zyt on 2017/12/8.
 * 对话框界面基类，置于DlgLayer层
 */
declare namespace Swift.UI {
    class DlgUI extends SkinUIBase {
    }
}
/**
 * Created by zyt on 2018/4/17.
 * 引导界面基类，置于GuideLayer层
 */
declare namespace Swift.UI {
    class GuideUI extends SkinUIBase {
    }
}
/**
 * Created by zyt on 2018/4/17.
 * 菜单界面基类，置于MenuLayer层
 */
declare namespace Swift.UI {
    class MenuUI extends SkinUIBase {
    }
}
declare namespace Consts.CellState {
    let Empty: number;
    let Cannot: number;
    let Through: number;
    let NPC: number;
}
/**
 * Created by zyt on 2017/12/8.
 * 继承egret.Sprite界面基类
 */
declare namespace Swift.UI {
    class SpriteUIBase extends egret.Sprite implements IUI {
        key: string;
        data: any;
        isPause: boolean;
        constructor(data: any);
        static show(data?: any): any;
        init(): void;
        onAddToStage(): void;
        onDestroy(): void;
        show(): void;
        close(destroy?: boolean): void;
        /**
         * 暂停，当打开新界面时当前界面暂停
         */
        pause(): void;
        /**
         * 恢复，当前界面关闭时上个界面恢复
         */
        resume(): void;
    }
}
/**
 * Created by zyt on 2018/4/17.
 * 最上层界面基类，置于TopLayer层
 */
declare namespace Swift.UI {
    class TopUI extends SkinUIBase {
    }
}
/**
 * Created by zyt on 2018/1/6.
 * UI界面管理
 */
declare namespace Swift.UI {
    class UIManager {
        private m_uiStackMap;
        private m_stage;
        private m_mainLayer;
        private m_menuLayer;
        private m_dlgLayer;
        private m_topLayer;
        private m_guideLayer;
        /**
         * ui系统初始化
         * @param {egret.Stage} stage
         */
        init(stage: egret.Stage): void;
        readonly stage: egret.Stage;
        readonly stageWidth: number;
        readonly stageHeight: number;
        readonly mainLayer: LayerBase;
        readonly dlgLayer: LayerBase;
        readonly menuLayer: LayerBase;
        readonly guideLayer: LayerBase;
        readonly topLayer: LayerBase;
        getUISatck(layerName: string): any;
        /**
         * 添加界面
         * @param {egret.DisplayObject} ui
         */
        add(ui: egret.DisplayObject): void;
        /**
         * 添加UI元素到指定层
         * @param {Swift.UI.LayerBase} layer
         * @param {egret.DisplayObject} ui
         */
        addToLayer(layer: LayerBase, ui: egret.DisplayObject): void;
        /**
         * 移除ui元素
         * @param {egret.DisplayObject} ui
         */
        remove(ui: egret.DisplayObject): void;
        /**
         * 获取指定层的当前界面
         * @param {string} name
         * @returns {Swift.UI.IUI}
         */
        getTopFromLayer(layer: LayerBase): IUI;
        /**
         * 关闭指定层的当前界面
         * @param {Swift.UI.LayerBase} layer
         * @param {boolean} destroy 是否要移除界面
         */
        closeTopFromLayer(layer: LayerBase, destroy?: boolean): void;
    }
    let uiManager: UIManager;
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
 * Created by zyt on 2018/4/17.
 * 定义Layer接口
 */
declare namespace Swift.UI {
    interface ILayer {
        layerName: string;
    }
}
/**
 * Created by zyt on 2017/12/8.
 * 定义UI界面接口
 */
declare namespace Swift.UI {
    interface IUI {
        key: string;
        data: any;
        isPause: boolean;
        init(): any;
        onAddToStage(): any;
        onDestroy(): any;
        show(): any;
        close(destroy: boolean): any;
        pause(): any;
        resume(): any;
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 对话框界面层
 */
declare namespace Swift.UI {
    class DlgLayer extends LayerBase {
        constructor();
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 最上层的引导UI层
 */
declare namespace Swift.UI {
    class GuideLayer extends LayerBase {
        constructor();
    }
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
 * Created by zyt on 2018/1/6.
 * 主容器层
 */
declare namespace Swift.UI {
    class MainLayer extends LayerBase {
        constructor();
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 菜单界面层
 */
declare namespace Swift.UI {
    class MenuLayer extends LayerBase {
        constructor();
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 顶部界面层
 */
declare namespace Swift.UI {
    class TopLayer extends LayerBase {
        constructor();
    }
}
/**
 * Created by zyt on 2018/1/6.
 * 通用工具类
 */
declare namespace Swift {
    class Utils {
        static getClassName(target: any): any;
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         */
        static createBitmapByName(name: string): egret.Bitmap;
    }
}
