const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var background1;

function preload()
{
	background1= loadImage("background.jpg");
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Bob
	bob1 = new Bob(360,300,20);
    bob1.velocityX=-4;

	bob2 = new Bob(380,300,20);
    bob1.velocityX=+2;

	bob3 = new Bob(400,300,20);
	bob1.velocityX=+2;

	bob4 = new Bob(420,300,20);
	bob1.velocityX=+2;

	bob5 = new Bob(440,300,20);
	bob1.velocityX=+4;


	//Roof
	roof = new Roof(400,100,200,20);

	//Ropes
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(background1);

  fill("red")
  textSize(25)
  text("pull the bob 1 and leave it to see how thr newton's cradle works", 50, 690)
  
  //display bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //display roof
  roof.display();

  //display ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(bob1.body, { x: mouseX , y: mouseY })
	
}