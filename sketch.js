var garden, rabbit;
var gardenImg, rabbitImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  appleGroup = createGroup()
}


function draw() {
  background(0);
  rabbit.x = mouseX;
  edges = createEdgeSprites();
  rabbit.collide(edges);
  spawnApple()
  if (appleGroup.isTouching(rabbit)) {
    appleGroup.destroyEach()
  }
  drawSprites();
}
function spawnApple() {
  if (frameCount % 120 === 0) {
    apple = createSprite(Math.round(random(50, 350)), -50, 50, 50);
    apple.addImage(appleImg);
    apple.scale = 0.1
    apple.velocityY = 3
    appleGroup.add(apple)
  }
}
