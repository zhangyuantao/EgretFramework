namespace Res {
    export class PreloadingUI extends UI.SpriteUIBase implements RES.PromiseTaskReporter{
        onCreate(){
            super.onCreate();
            this.createView();
        }

        private textField: egret.TextField;

        private createView(): void {
            let self = this;
            self.textField = new egret.TextField();
            self.addChild(self.textField);
            self.textField.y = 300;
            self.textField.width = Utils.StageUtils.stageWidth;
            self.textField.height = 100;
            self.textField.textAlign = "center";
        }

        onProgress(current: number, total: number): void {
            this.textField.text = `Loading...${current}/${total}`;
        }
    }
}