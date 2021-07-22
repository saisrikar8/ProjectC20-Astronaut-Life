var moveAnimation, bathAnimation, brushimg, drinkAnimation, eatAnimation, gymAnimation, sleepAnimation;
var iss, astronaut, issimg;
var edges;
var textNum = 1;
function preload(){
  moveAnimation = loadAnimation("move.png", "move.png", "move1.png", "move1.png");
  bathAnimation = loadAnimation("bath1.png", "bath2.png");
  brushimg = loadAnimation("brush.png");
  drinkAnimation = loadAnimation("drink1.png", "drink2.png");
  eatAnimation = loadAnimation("eat1.png", "eat2.png");
  gymAnimation = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  sleepAnimation = loadAnimation("sleep.png");
  issimg = loadImage("iss.png");
}
function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200);
  iss.addImage(issimg);
  iss.scale = 0.2;

  astronaut = createSprite(400, 200);
  astronaut.addAnimation("sleeping", sleepAnimation);
  astronaut.scale = 0.13;

  edges = createEdgeSprites();
}

function draw() {
  astronaut.bounceOff(edges[0]);
  astronaut.bounceOff(edges[1]);
  astronaut.bounceOff(edges[2]);
  astronaut.bounceOff(edges[3]);

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushimg);
    astronaut.changeAnimation("brushing");
    textNum = 2;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("exercising", gymAnimation);
    astronaut.changeAnimation("exercising");
    textNum = 3;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if (keyDown("left")){
    astronaut.addAnimation("bathing", bathAnimation);
    astronaut.changeAnimation("bathing");
    textNum = 4;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if (keyDown("right")){
    astronaut.addAnimation("eating", eatAnimation);
    astronaut.changeAnimation("eating");
    textNum = 5;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if (keyDown("m")){
    astronaut.addAnimation("floating", moveAnimation);
    astronaut.changeAnimation("floating", moveAnimation);
  }
  background(255,255,255);
  drawSprites();
  fill("red");
  textAlign(CENTER);
  textSize(10);
  switch(textNum){
    case 1:
      text("Press up to brush", 400, 50);
      break;
    case 2:
      text("Press down to exercise", 400, 50);
      break;
    case 3:
      text("Press left to bathe", 400, 50);
      break;
    case 4:
      text("Press right to eat", 400, 50);
      break;
    case 5:
      text("Press m to move", 400, 50);
      break;
    default:
      break;
  };
}
