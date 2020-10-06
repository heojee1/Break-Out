class Brick {
    constructor() {
        this.x;
        this.y;
        this.width = 48;
        this.height = 15;
        this.padding = 10;
        this.offsetTop = 10;
        this.offsetLeft = 10;
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}