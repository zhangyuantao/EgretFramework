/**
 * 摇杆
 */
namespace GameCore.UI {
    export class Joystick extends eui.Component {
        private radius: number; // 摇杆半径
        private tray: eui.Image;
        private handle: eui.Image;

        private curAngle: number;

        constructor() {
            super();
            let self = this;
            self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
        }

        private onAddToStage() {
            let self = this;
            self.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouchBegin, self);
            self.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouchEnd, self);
            self.addEventListener(egret.TouchEvent.TOUCH_CANCEL, self.onTouchEnd, self);
            self.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, self.onTouchEnd, self);

            self.radius = self.tray.width >> 1;
        }

        private onTouchBegin(event: egret.TouchEvent) {
            let self = this;
            Game.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouchMove, self);
        }

        private onTouchMove(event: egret.TouchEvent) {
            let self = this;
            let point: egret.Point = self.handle.parent.globalToLocal(event.stageX, event.stageY);
            let angle = Math.atan2(point.y - self.tray.y, point.x - self.tray.x);

            // 限制滑动距离
            if (point.length > self.radius)
                point = egret.Point.polar(self.radius, angle);

            self.handle.x = point.x;
            self.handle.y = point.y;

            if (self.curAngle == angle) return;
            self.curAngle = angle;
            self.stage.dispatchEventWith('onJoystick', false, angle);
        }

        private onTouchEnd() {
            let self = this;
            egret.Tween.removeTweens(self.handle);
            egret.Tween.get(self.handle).to({x: 0, y: 0}, 100, egret.Ease.backOut);
            self.stage.dispatchEventWith('onJoystickEnd');
            self.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouchMove, self);
        }
    }
}