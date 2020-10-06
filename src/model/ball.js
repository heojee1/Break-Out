class Ball {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.radius = 10;
        this.dx = 2;
        this.dy = -2;
        this.color = '#0095DD';
        this.fall = false;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    checkBoundary() {
        let xLocation = this.x + this.dx;
        let yLocation = this.y + this.dy;

        if (xLocation < this.radius || xLocation > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (yLocation < this.radius) {
            this.dy = -this.dy;
        } else if (yLocation > canvas.height - this.radius) {
            this.fall = true;
        }
    }
    
    update() {
        this.draw();
        this.checkBoundary();
        this.x += this.dx;
        this.y += this.dy;
    }
}