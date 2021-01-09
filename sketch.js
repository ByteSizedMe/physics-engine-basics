const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball;

function setup() {
  

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world
  var groundOptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,350,600,20,groundOptions);
  World.add(world,ground);
  var ballOptions = {
    restitution:1
  }
  ball = Bodies.circle(200,100,40,ballOptions);
  World.add(world,ball);
  
  
}

function draw() {
  background("blue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
}