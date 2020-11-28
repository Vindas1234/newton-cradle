
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(350,350,30,40);
	bob2 = new Bob(400,350,30,40);
	bob3 = new Bob(450,350,30,40);
	bob4 = new Bob(500,350,30,40);
	bob5 = new Bob(300,350,30,40);
  rooof= new Roof(400,150,300,20);
    rope= new Chain(bob1.body,{x:350,y:400})
//var options - (
//bodyA : Bob.body,  
//bodyB : Roof.body,
//stiffness:0.04,
//length=10 


//)
 
 
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rooof.display();
  
  drawSprites();
 
}



