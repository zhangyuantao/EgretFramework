namespace Res {
    export class ResMgr{
        static instance:ResMgr;

        private constructor(){
            if(ResMgr.instance)
                throw 'ResMgr instance already constructed!';
        }

        /**
         * 单例
         * @returns {Index.ResMgr}
         */
        static getInstance():ResMgr{
            if(!ResMgr.instance)
                ResMgr.instance = new ResMgr();
            return ResMgr.instance;
        }

        /**
         * 加载资源组带加载界面
         * @param {string} name
         */
        static async loadGroup(name:string){
            const dlg = LoadingResDlg.show();
            await RES.loadGroup(name, 0, dlg);
            dlg.close();
        }
    }
}