class Controller {
    constructor() {
        this.leftPressed = false;
        this.rightPressed = false;
        this.setup();
    }

    keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
    }
    
    keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
    }

    setup() {
        this.boundKeyDownHandler = e => this.keyDownHandler(e);
        this.boundKeyUpHandler = e => this.keyUpHandler(e);
        document.addEventListener("keydown", this.boundKeyDownHandler, false);
        document.addEventListener("keyup", this.boundKeyUpHandler, false);
    }
}


