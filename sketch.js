var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  car = createSprite(300,200,20,20)
  car.shapeColor = "blue";
  wall = createSprite(900,200,20,70);
  wall.shapeColor = "yellow";

car.velocityX=4;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(car,wall)){
  
textSize(40);  
text("crashed car",500,500)



}
  bounceOff(car,wall);
  drawSprites();
}

