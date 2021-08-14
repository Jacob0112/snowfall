var bg = "sprites/snow1.jpg";
var sf = "sprites/snow4.jpg";
var backgroundImg;
function preload() {
  backgroundImg = loadImage("sprites/snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}