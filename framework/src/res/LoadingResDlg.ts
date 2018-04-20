namespace Res {
    export class LoadingResDlg extends UI.SkinUIBase implements RES.PromiseTaskReporter{
        private loadingTxt:eui.Label;

        onProgress(current: number, total: number): void {
            this.loadingTxt.text = `Loading...${current}/${total}`;
        }
    }
}