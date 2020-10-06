class Game {
    constructor() {
        // this.canvas = document.getElementById("myCanvas");
        // this.ctx = canvas.getContext("2d");

        this.ball = new Ball();
        this.paddle = new Paddle();
    }

    start() {
        return setInterval(() => { 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ball.update();
            this.paddle.update();
         }, 10);
    }
}
// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");

// let ball = new Ball();
// let paddle = new Paddle();
// let controller = new Controller();

