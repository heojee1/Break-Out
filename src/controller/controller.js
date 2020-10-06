class Controller {
    constructor() {
        this.leftPressed = false;
        this.rightPressed = false;
        this.mouseMove = 0;
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

    mouseMoveHandler(e) {
        this.mouseMove = 0;
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            this.mouseMove = relativeX;
        }
        return this.mouseMove;
    }

    setup() {
        this.boundKeyDownHandler = e => this.keyDownHandler(e);
        this.boundKeyUpHandler = e => this.keyUpHandler(e);
        this.boundmouseMoveHandler = e =>  this.mouseMoveHandler(e);
        document.addEventListener("keydown", this.boundKeyDownHandler, false);
        document.addEventListener("keyup", this.boundKeyUpHandler, false);
        document.addEventListener("mousemove", this.boundmouseMoveHandler, false);
    }
}


