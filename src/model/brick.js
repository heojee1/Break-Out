class Brick {
    constructor() {
        this.x;
        this.y;
        this.width = 75;
        this.height = 20;
        this.padding = 10;
        this.offsetTop = 30;
        this.offsetLeft = 30;
        this.destroyed = false;
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        if (!this.destroyed) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}