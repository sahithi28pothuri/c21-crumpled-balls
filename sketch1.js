
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,l1,l2;

var ball;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,380,800,20)
	l1 = new Ground(670,342,20,100);
	l2 = new Ground(520,342,20,100);

	var xyz={
		isStatic:false,
		restitution:0.1,
		density:1.2,
		friction:0,

	}

	ball=Bodies.circle(150,365,15,xyz);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  l1.display();
  l2.display();
  ground. display();
  
  fill("cyan");
  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,15,15);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:25.5,y:32});
	}
} 




