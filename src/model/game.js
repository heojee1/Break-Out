class Game {
    constructor() {
        this.ball = new Ball();
        this.paddle = new Paddle();
        this.timer;
    }

    gameOver() {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(this.timer); // Needed for Chrome to end game
    }

    start() {
        this.timer = setInterval(() => { 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ball.update();
            this.paddle.update();
            if (this.ball.dead) {
                this.gameOver();
            }
         }, 10);
    }
}
