var ground;
var paper;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var box1, box2, box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,40);

	paper = new Paper(380,300,50);

	Engine.run(engine);

	box1=createSprite(600,650,200,20);
	box1.shapeColor=color(255,0,0)
	box1.isStatic = true;

	box2=createSprite(500,610,20,100);
	box2.shapeColor=color(255,0,0)
	box2.isStatic = true;

	box3=createSprite(700,610,20,100);
	box3.shapeColor=color(255,0,0)
	box3.isStatic = true;  

	launcher = new Launcher(paper.body,{x:380, y:280});
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  launcher.display();    
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY})
}
function mouseReleased() {
    launcher.fly()
}

//function keyPressed() { 
//	if (keyCode === UP_ARROW) {
//		 Matter.body.applyForce(paper.body, paper.body.position, {x: 85, y: -85}); 
//	} 
//}
