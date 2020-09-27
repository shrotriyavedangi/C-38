var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1_img , c2_img , c3_img , c4_img , track;

function preload(){
track = loadImage('images/track.jpg');
c1_img = loadImage('images/car1.png');
c2_img = loadImage('images/car2.png');
c3_img = loadImage('images/car3.png');
c4_img = loadImage('images/car4.png');
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
