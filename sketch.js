const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var hr,mn,sc
var scAngle
var hrAngle
var mnAngle

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  hr=hour()
  mn=minute()
 sc=second()
}

function draw() {
  background("black"); 
  Engine.update(engine);  
  angleMode(DEGREES)
  scAngle=map(sc,0,60,0,360)
  hrAngle=map(hr%12,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  push()
  rotate(scAngle)
  stroke("blue")
  strokeWeight(7)
  arc(0,0,300,300,0,scAngle)
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("red")
  strokeWeight(7)
  arc(0,0,350,350,0,hrAngle)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(7)
  arc(0,0,400,400,0,mnAngle)
  line(0,0,100,0)
  pop()
  
  drawSprites();
}