class Bricks {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.bricks = [];
        this.createBricks();
        console.log(this.bricks);
    }

    createBricks() {
        for (let i = 0; i < this.col; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.row; j++) {
                let brick = new Brick();
                let x = (i * (brick.width + brick.padding)) + brick.offsetLeft;
                let y = (j * (brick.height + brick.padding)) + brick.offsetTop;
                brick.setLocation(x, y);
                this.bricks[i][j] = brick;
            }
        }
    }

    draw() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                this.bricks[i][j].draw();
            }
        }
    }

    update() {

    }
}

