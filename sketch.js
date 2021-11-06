var linestand;
var dirt;
var thorns;
var player1;
var backgrounding;
var linebelow;
var lava;
var pole;
var jump;
var groupdirt;
var grouplava;

function preload(){
  dirt = loadImage("sleeping line.png")
  linestand = loadImage("standingline.png")
  thorns = loadImage("thorns.png")
  player1 = loadImage("player.png")
  lava = loadImage("lava.png")
  pole = loadImage("pole.jpg")
  jump = loadImage("jump.png")
  soul = loadImage("soul sand.png")
  
}


function setup() {
  createCanvas(800,400);
  player12 = createSprite(30, 52, 10, 10);
  player12.addImage(player1)
  player12.scale  = 0.2

  lavadie = createSprite(200, 170 , 10, 10);
  lavadie.addImage(lava)
  lavadie.scale = 0.5


  groupdirt = new Group();
  grouplava = new Group();
  


  lavadie1 = createSprite(240, 170 , 10, 10);
  lavadie1.addImage(lava)
  lavadie1.scale = 0.5

  lavadie2 = createSprite(310, 170 , 10, 10);
  lavadie2.addImage(lava)
  lavadie2.scale = 0.5

  lavadie3 = createSprite(480, 170 , 10, 10);
  lavadie3.addImage(lava)
  lavadie3.scale = 0.5

  lavadie4 = createSprite(540, 170 , 10, 10);
  lavadie4.addImage(lava)
  lavadie4.scale = 0.5

  lavadie5 = createSprite(590, 170 , 10, 10);
  lavadie5.addImage(lava)
  lavadie5.scale = 0.5

  lavadie6 = createSprite(720, 170 , 10, 10);
  lavadie6.addImage(lava)
  lavadie6.scale = 0.5

  lavadie7 = createSprite(70, 170 , 10, 10);
  lavadie7.addImage(lava)
  lavadie7.scale = 0.5


  polee = createSprite(96, 93, 10, 10);
  polee.addImage(dirt)
  polee.scale = 0.15  
  

  dirt1 = createSprite(190, 93, 10, 50);
  dirt1.addImage(dirt)
  dirt1.scale = 0.15

  dirt2 = createSprite(10, 93, 1, 10);
  dirt2.addImage(dirt)
  dirt2.scale = 0.15

  dirt3 = createSprite(370, 93, 10, 10);
  dirt3.addImage(dirt)
  dirt3.scale = 0.15

  soul1 = createSprite(590, 93, 10, 10);
  soul1.addImage(soul)
  soul1.scale = 0.1

  dirt4 = createSprite(256, 93, 10, 10);
  dirt4.addImage(dirt)
  dirt4.scale = 0.15


  groupdirt.add(dirt1)
  groupdirt.add(dirt2)
  groupdirt.add(dirt3)
  groupdirt.add(dirt4)
  groupdirt.add(polee)

  grouplava.add(lavadie)
  grouplava.add(lavadie1)
  grouplava.add(lavadie2)
  grouplava.add(lavadie3)
  grouplava.add(lavadie4)
  grouplava.add(lavadie5)
  grouplava.add(lavadie6)
  grouplava.add(lavadie7)
  

  

  

  

  

  linebelow = createSprite(400, 216,1000,20); 

}

function draw() {
  background(0); 
  player12.velocityY = player12.velocityY + 0.8 
  console.log("mouseX"+mouseX+"mouseY"+mouseY)


  drawSprites();



 /* if(keyDown("space")){
    player12.addImage(jump);
    player12.velocityY = 0.5
    player12.scale  = 0.2
  }*/

/* if(keyDown("LEFT_ARROW")){
  player12.addImage(player1);
  
  player12.velocityX = 0.5
 }*/

if(player12.isTouching(groupdirt)){
  player12.velocityY = 0;
  player12.velocityX = 0;
  player12.addImage(player1)
}



if(player12.isTouching(soul1)){
  player12.velocityY = 0;
  player12.velocityX = 0.5;
  player12.addImage(player1)
}


if(player12.isTouching(linebelow)){
  player12.velocityY = 0;
}


if(player12.isTouching(grouplava)){
  console.log("Game Over")
  player12.visible = false;
}


if(keyWentDown(RIGHT_ARROW)){
  player12.velocityX = 3
  player12.velocityY = -5
  player12.addImage(jump)
}

if(keyWentUp(RIGHT_ARROW)){
 /* player12.velocityX = 0
  player12.velocityY = -2*/
  player12.addImage(jump)
}

}








