// Start screen + game screen + game over screen

let startScreen = document.querySelector("#start-screen");
let gameOver = document.querySelector("#gameOver");
let startButton = document.querySelector("#startButton");
let restartButton = document.querySelector("#restartButton");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";

let isGameOver = false;
let intervalId = 0;

// In game music
let audio = new Audio('./audio/Basketball.mp3');
audio.loop = true;
audio.volume = 0.01;
    

// Main player
let player = new Image();
player.src = "./images/player.png";
let playerX = 50;
let playerY = 300;

//opponent 1
let opponent1 = new Image();
opponent1.src = "./images/opponent.png";
let opponent1X = 200;
let opponent1Y = 400;

//opponent 2
let opponent2 = new Image();
opponent2.src = "./images/opponent.png";
let opponent2X = 350;
let opponent2Y = 300;

//opponent 3
let opponent3 = new Image();
opponent3.src = "./images/opponent.png";
let opponent3X = 550;
let opponent3Y = 400;

//opponent 4
let opponent4 = new Image();
opponent4.src = "./images/opponent.png";
let opponent4X = 675;
let opponent4Y = 400;

//speed
let playerSpeed = 10;
let opponentSpeed1 = 2;
let opponentSpeed2= 2;
let opponentSpeed3 = 2;
let opponentSpeed4 = 2;



let basketballCourt = new Image();
basketballCourt.src = "./images/basket-court.png";

window.onload = function (){ 
    canvas.style.display = "none";
    gameOver.style.display = "none";

    startButton.addEventListener("click", function(){
        audio.play();
        startScreen.style.display = "none";
        canvas.style.display = "flex";
        startGame();
    })
    document.addEventListener("keypress", function(event){
        if(event.key === "s"){
            playerX += playerSpeed;
        }else if(event.key === "z"){
            playerY += playerSpeed;
        }else if(event.key === "a"){
            playerX -=playerSpeed;
        }else if(event.key === "w"){
            playerY -= playerSpeed;
        }
    })
    function startGame(){
ctx.drawImage(basketballCourt, 0,0, canvas.width, canvas.height);
ctx.drawImage(player, playerX,playerY, 50,50);
ctx.drawImage(opponent1, opponent1X,opponent1Y, 50,50);
ctx.drawImage(opponent2, opponent2X,opponent2Y, 50,50);
ctx.drawImage(opponent3, opponent3X,opponent3Y, 50,50);
ctx.drawImage(opponent4, opponent4X,opponent4Y, 50,50);


// Game stops if he dunks it
if(playerX> canvas.width -100 && playerY>250 && playerY<450){
    isGameOver= true;
}


//opponent1 Movement 
opponent1Y += opponentSpeed1
if((opponent1Y+50+30)>= canvas.height){
    opponentSpeed1 = -opponentSpeed1
}else if(opponent1Y<= 0){
    opponentSpeed1 = -opponentSpeed1
}
//opponent2 Movement 

opponent2Y -= opponentSpeed2
if((opponent2Y+50+30) >= canvas.height){
    opponentSpeed2 = -opponentSpeed2;
}else if(opponent2Y <= 0){
    opponentSpeed2 = -opponentSpeed2
}

//opponent3 Movement 
opponent3Y -= opponentSpeed3
if((opponent3Y+50+30) >= canvas.height){
    opponentSpeed3 = -opponentSpeed3;
}else if(opponent3Y <= 0){
    opponentSpeed3 = -opponentSpeed3
}

//opponent4 Movement 
opponent4Y -= opponentSpeed4
if((opponent4Y+50+30) >= canvas.height){
    opponentSpeed4 = -opponentSpeed4;
}else if(opponent4Y <= 0){
    opponentSpeed4 = -opponentSpeed4
}

//1st collision
if(playerX+50 >= opponent1X && playerY+50 >= opponent1Y && playerY<= opponent1Y+50 && playerX<=opponent1X+50){
    isGameOver = true;
}
//2nd collision
if(playerX+50 >= opponent2X && playerY+50 >= opponent2Y && playerY<= opponent2Y+50 && playerX<=opponent2X+50){
    isGameOver = true;
}
//3rd collision
if(playerX+50 >= opponent3X && playerY+50 >= opponent3Y && playerY<= opponent3Y+50 && playerX<=opponent3X+50){
    isGameOver = true;
}

//4th collision
if(playerX+50 >= opponent4X && playerY+50 >= opponent4Y && playerY<= opponent4Y+50 && playerX<=opponent4X+50){
    isGameOver = true;
}


if(isGameOver){
    canvas.style.display = "none";
    gameOver.style.display = "flex";
    cancelAnimationFrame(intervalId)
}else{
intervalId = requestAnimationFrame(startGame);
}
    }

    restartButton.addEventListener("click", function(){
        canvas.style.display = "flex";
        gameOver.style.display = "none";
        playerX = 50;
        playerY = 300;
        isGameOver = false;
        startGame();
    })
}












//Player movements

