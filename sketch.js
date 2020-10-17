const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin;

function preload(){
	
}

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,70);
	ground = new Ground(600,height,1200,20);
	dustbin = new Dustbin(600,640,100,100);

	Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background("white");

  keyPressed();

  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-15});
		console.log("ananya");
	}
	else{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});
		console.log("tiwari");
	}
}