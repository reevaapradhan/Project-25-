
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//const Constraint = Matter.Constraint;

var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
//var launcherString;

function preload(){
	dustbinIMG = loadImage("dustbin.png");
}
function setup() {
	createCanvas(800,600);
	
	dustbin = createSprite(600,480,300,200);
	dustbin.addImage(dustbinIMG);
	dustbin.scale = 0.6;
	
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(600,570,150,20);
	dustbin2 = new Dustbin(520,510,20,150);
	dustbin3 = new Dustbin(680,510,20,150);

	paper = new Paper();

	ground = new Ground();

	//launcherString = new Launcher(paper.body,{x:180,y:100});

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  background("darkGrey");
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 // launcherString.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800, y:-800});
		//console.log("inside up arrow");
	}
}


