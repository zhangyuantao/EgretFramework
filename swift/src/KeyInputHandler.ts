// TypeScript file
class KeyInputHandler {
    public static instance:KeyInputHandler = new KeyInputHandler();
    public static DIR_LEFT:number = 1;
    public static DIR_RIGHT:number = 2;
    public static DIR_UP:number = 3;
    public static DIR_DOWN:number = 4;

    private curDir:number;

    private constructor(){
        let self = this;
        if (KeyInputHandler.instance) throw 'KeyInputHandler.instance单例已存在！';
        document.addEventListener("keydown", (event:KeyboardEvent) => {
            self.keyHandler(event);

        });
        document.addEventListener("keyup", (event:KeyboardEvent) => {
            Game.stage.dispatchEventWith(event.type);
            self.curDir = 0;
        });

    }

    private keyHandler(event: KeyboardEvent){
        let self = this;
        let dir;
        switch (event.keyCode) {
            // left
            case 37:
            case 65:
                dir = KeyInputHandler.DIR_LEFT;
                break;
            // right
            case 39:
            case 68:
                dir = KeyInputHandler.DIR_RIGHT;
                break;
            // up
            case 38:
            case 87:
                dir = KeyInputHandler.DIR_UP;
                break;
            // down
            case 83:
            case 40:
                dir = KeyInputHandler.DIR_DOWN;
                break;
            default:
                    return;
        }

        if(self.curDir == dir) return;
        self.curDir = dir;

        Game.stage.dispatchEventWith(event.type, false, dir);
    }
}