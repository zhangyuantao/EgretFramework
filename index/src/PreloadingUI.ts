namespace Index {
    export class PreloadingUI extends Swift.UI.SpriteUIBase implements RES.PromiseTaskReporter{
        init(){
            super.init();
            this.createView();
        }

        private textField: egret.TextField;

        private createView(): void {
            let self = this;
            self.textField = new egret.TextField();
            self.addChild(self.textField);
            self.textField.y = 300;
            self.textField.width = 480;
            self.textField.height = 100;
            self.textField.textAlign = "center";
        }

        onProgress(current: number, total: number): void {
            this.textField.text = `Loading...${current}/${total}`;
        }
    }
}