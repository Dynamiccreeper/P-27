
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var circle,circle3,circle4,circle6;
var constraintlog;
var ground;
var ground2;
var g3,g4,g5,g6,g7;
var chain,c2,c3,c4,c5,c6;


function preload()
{
	
}

function setup() {
	createCanvas(800, 1000);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground=new Ground(200,200,100,10);


g3=new Ground(250,200,100,10);
g4=new Ground(300,200,100,10);
g5=new Ground(350,200,100,10);
g6=new Ground(400,200,100,10);
g7=new Ground(450,200,100,10);

//ground2=new Ground(400,650,100,10);

	circle = new Circle2(200,300,50);
	circle2 = new Circle2(250,300,50);
	circle3 = new Circle2(300,300,50);
	circle4 = new Circle2(350,300,50);
	circle5 = new Circle2(400,300,50);
	circle6 = new Circle2(450,300,50);
	//constraintlog = new Circle(200,200,120, PI/2);
	chain = new Circle(circle.body,ground.body);
	c2 = new Circle(circle2.body,g3.body);
	c3 = new Circle(circle3.body,g4.body);
	c4 = new Circle(circle4.body,g5.body);
	c5 = new Circle(circle5.body,g6.body);
	c6 = new Circle(circle6.body,g7.body);	

	Engine.run(engine);
  
}


function draw() {
	background("blue");
  rectMode(CENTER);
 
  circle.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();


 // ground2.display();
  ground.display();
  chain.display();
  c2.display();
c3.display();
c4.display();
c5.display();
c6.display();

g3.display();
g4.display();
g5.display();
g6.display();
g7.display();

  //constraintlog.display();
  drawSprites();

 
}


function mouseDragged(){
    Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
}


//function mouseReleased(){
  //  slingshot.fly();
//}

