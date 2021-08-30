const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload() {
  bg = loadImage("sprite/bg.jpg");
}
function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;

  ball = new Paper(150, 600, 10);
  dustbin1 = new Dustbin(1000, 550, 305, 255);
  ground = new Ground(600, 650, 1100, 15);
  invisibleground = new Ground(600, 670, 1100, 55);
  invisibleground1 = new invisibleGround(950, 500, 50, 150);
  invisibleground2 = new invisibleGround(925, 600, 200, 15);
  invisibleground3 = new invisibleGround(800, 500, 20, 150);
}

function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);
  dustbin1.display();
  ball.display();
  ground.display();
  invisibleground.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, { x: 17, y: -20 });
  }
}
