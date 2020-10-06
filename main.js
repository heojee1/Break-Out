this.canvas = document.getElementById("myCanvas");
this.ctx = canvas.getContext("2d");

let gameTimerId = new Game().start();
console.log(gameTimerId)