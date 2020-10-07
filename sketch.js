var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var sprite1,sprite2,sprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	 createCanvas(800, 700);
	rectMode(CENTER);
	
    
	packageSprite=createSprite(width/2, 80,5,5);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	sprite1=createSprite(width/2,650,200,20);
	sprite1.shapeColor='red';

	sprite2=createSprite(490,600,20,100);
	sprite2.shapeColor='red';

	sprite3=createSprite(310,600,20,100);
	sprite3.shapeColor='red';


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	keyPressed(packageBody);

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);

	sprite1=Bodies.rectangle(width/2,650,200,20, {isStatic:true});
	World.add(world, sprite1);
	sprite2=Bodies.rectangle(490,600,20,100, {isStatic:true});
	World.add(world, sprite2);
	sprite3=Bodies.rectangle(310,600,20,100, {isStatic:true});
	World.add(world, sprite3);

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	

	Engine.run(engine);
	
}


function draw() {
	background(0);
	rectMode(CENTER);
	rect( packageSprite.x, packageSprite.y,10,10);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);

  }

  
}



