const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var b1=[],b2=[],b3=[];
var bgImg;
function preload(){
	bgImg=loadImage("images/GamingBackground.png")
}
function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,685,1200,30)

   for(var i=635;i>200;i=i-80){
		b1.push(new Box(700,i))
	}
	for(var i=635;i>300;i=i-80){
		b2.push(new Box(790,i))
	}
	for(var i=635;i>400;i=i-80){
		b2.push(new Box(880,i))
	}
	
   ball=new Ball(400,500,40)
   rope=new Rope(ball.body,{x:400,y:20})
	
  
}


function draw() {
	Engine.update (engine);
	background(bgImg); 	
 ground.display();
  
  for(var i=0;i<b1.length;i=i+1){
	b1[i].display();
}
for(var i=0;i<b2.length;i=i+1){
	b2[i].display();
}
for(var i=0;i<b3.length;i=i+1){
	b3[i].display();
}

ball.display();
rope.display(); 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-65,y:-50})

	}
}








  



