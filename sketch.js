
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1,trash2,trash3;
var paper1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	trash1 = new trash(360,600,20,50);

	paper1 = new paper(100,660,20,20);

	ground = Bodies.rectangle(width/2, 699, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,210,15);

  paper1.display();

  trash1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//Matter.Body.applyForce(body, position, force)
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5, y:-30});
	}	
}

