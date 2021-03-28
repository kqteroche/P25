
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1, paper;

function preload()
{
	
}

function setup() {
	var Canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

    ground = new Ground(400,670,800,10)

	dustbin1 = new Dustbin(560,613,15,100)
	dustbin2 = new Dustbin(650,613,15,100)
	dustbin3 = new Dustbin(605,655,100,15)

	paper = new Paper(200,400,30,30)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

    ground.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
    
	paper.display();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})
	}
}

