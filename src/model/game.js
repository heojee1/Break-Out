class Game {
    constructor() {
        this.ball       = new Ball();
        this.paddle     = new Paddle();
        this.bricks     = new Bricks(5, 3);
        this.score      = 0;
        this.timer;
        console.log(this.ball.x, this.paddle.x)
    }

    drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText(`Score: ${this.score}`, 8, 20);
    }

    detectCollision() {
        this.score += this.ball.detectCollision(this.bricks);
    }

    checkBounce() {
        let ball = this.ball;
        let paddle = this.paddle;
        if (ball.fall) {
            if (ball.x > paddle.x 
                && ball.x < paddle.x + paddle.width)
            {
                ball.dy = -ball.dy;
                ball.fall = false;
            } else {
                this.gameOver('You Lost');
            }
        }
    }

    checkWinning() {
        if (this.score == 3) {
            console.log(this.score)
            this.gameOver('You Won');
        }
    }

    gameOver(msg) {
        // alert(msg);
        // document.location.reload();
        clearInterval(this.timer); // Needed for Chrome to end game
        this.score = 0;
    }

    start() {
        this.timer = setInterval(() => { 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.bricks.update();
            this.ball.update();
            this.paddle.update();
            this.detectCollision();
            this.checkBounce();
            this.drawScore();
            this.checkWinning();
         }, 10);
    }
}
