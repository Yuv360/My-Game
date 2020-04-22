 var playerImg;
 var goblinImg;
 var backgroundImg;
 var boxGroup;
 var player;
 var goblin;
 var canvas;
 var goblinsGroup1;
 var goblinsGroup2;
 var goblinsGroup3;
 var goblinsGroup4;

function preload(){
  playerImg = loadImage("spiderman.png");
  backgroundImg = loadImage("space background image.jpg");
  goblinImg = loadImage("goblin.png");
}

function setup() {
 canvas = createCanvas(displayWidth,790);
  goblinsGroup1 = new Group();
  goblinsGroup2 = new Group();
  goblinsGroup3 = new Group();
  goblinsGroup4 = new Group();
player = createSprite(displayWidth/2,395,50,50);
player.addImage("Spidey",playerImg);  
player.scale = 0.07;
}

function draw() {
  background(backgroundImg);  

goblin11();

if(keyDown(LEFT_ARROW)){
  player.x = player.x-10;

}
 
if(keyDown(RIGHT_ARROW)){
  player.x = player.x+10;
}

if(keyDown(UP_ARROW)){
  player.y = player.y-10;
}

if(keyDown(DOWN_ARROW)){
  player.y = player.y+10;
}

  drawSprites();


}
function goblin11(){
  if(frameCount%100===0){
    var goblin1 = createSprite(random(0,displayWidth),0);
    goblin1.addImage(goblinImg);
    if(goblin1.x<displayWidth/2){
      goblin1.velocityX = 5;
      goblin1.velocityY = 5;
     
    }
    else{
      goblin1.velocityX = -5;
      goblin1.velocityY = 5;
    }
  goblin1.scale = 0.7;
  }
}




