const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world,object1,object2,obj2_prop,obj2_prop2;
function setup() {
  createCanvas(800,800);
 engine=Engine.create();
 world=engine.world;
 obj2_prop={
   isStatic: true
   
 }
 obj2_prop2={
  restitution:0.1
 }
 object1=Bodies.rectangle(400,200,100,100,obj2_prop2);
 World.add(world,object1); 

 object2=Bodies.rectangle(400,500,800,10,obj2_prop);
 World.add(world,object2); 


}

function draw() {
  background("yellow"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,100,100);
  rectMode(CENTER);
  rect(object2.position.x,object2.position.y,800,10);
  drawSprites();
}