class Game {
    constructor() {
        this.ball = new Ball();
        this.paddle = new Paddle();
        this.score = 0;
        this.timer;
    }

    checkHit() {
        console.log('ball');
        console.log(this.ball.x)
        console.log('paddle')
        console.log(this.paddle.x, this.paddle.width)
        if(this.ball.x > this.paddle.x 
            && this.ball.x < this.paddle.x + this.paddle.width)
        {
            this.ball.dy = -this.ball.dy;
            this.ball.fall = false;
        } else {
            this.gameOver();
        }
    }

    gameOver() {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(this.timer); // Needed for Chrome to end game
        this.score = 0;
    }

    start() {
        this.timer = setInterval(() => { 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ball.update();
            this.paddle.update();
            if (this.ball.fall) {
                this.checkHit();
            }
         }, 10);
    }
}
