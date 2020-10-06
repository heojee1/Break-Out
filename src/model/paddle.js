class Paddle {
    constructor() {
        this.cont = new Controller();
        this.width = 75;
        this.height = 10;
        this.x = (canvas.width - this.width) / 2;
        this.y = canvas.height - this.height;
        this.step = 7;
        this.color = "#0095DD";
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    checkBoundary() {
        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
        if (this.x < 0) {
            this.x = 0;
        }
    }

    update() {
        this.draw();
        if(this.cont.rightPressed) {
            this.x += this.step;
        } else if(this.cont.leftPressed) {
            this.x -= this.step;
        }
        this.x = this.cont.mouseMove - this.width / 2;
        this.checkBoundary();
    }
}