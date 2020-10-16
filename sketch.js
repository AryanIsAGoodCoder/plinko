
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world;
var ball;
var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinko;
var divisionHeight = 300;

function preload()
{

}

function setup() {
	createCanvas(480, 800);

  engine = Engine.create();
	world = engine.world;
  ball = new Partical(200,0,20);
  ball2 = new Partical(200,0,20);
  ball3 = new Partical(200,0,20);
  ball4= new Partical(200,0,20);
  ball5 = new Partical(200,0,20);
  ball6 = new Partical(200,0,20);
  ball7 = new Partical(200,0,20);
  ball8 = new Partical(200,0,20);
  ball9 = new Partical(200,0,20);
  ball10 = new Partical(200,0,20);
  ball11 = new Partical(200,0,20);
  
  
  ground = new Ground(240,770,480,10);
  
  division1 = new Divisions(0,620,5,divisionHeight);
  division2 = new Divisions(80,620,5,divisionHeight);
  division3 = new Divisions(160,620,5,divisionHeight);
  division4 = new Divisions(240,620,5,divisionHeight);
  division5 = new Divisions(320,620,5,divisionHeight);
  division6 = new Divisions(400,620,5,divisionHeight);
  division7 = new Divisions(480,620,5,divisionHeight);

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);

 
 for (var j  = 40; j <=width;j=j+50) {
  plinko = new Plinko(j,200,20);
  plinko.display();
 }
 for (var i  = 10; i <=width;i=i+50) {
  plinko2 = new Plinko(i,150,20);
  plinko2.display();
 }
 for (var f  = 40; f <=width;f=f+50) {
  plinko3 = new Plinko(f,100,20);
  plinko3.display();
 }
 for (var a  = 10; a <=width;a=a+50) {
  plinko4 = new Plinko(a,50,20);
  plinko4.display();
 }
 for (var y  = 10; y <=width;y=y+50) {
  plinko5 = new Plinko(y,250,20);
  plinko5.display();
 }
 //if (frameCount % 60 === 0) {
  //ball2 = new Partical(200,0,20); 
  //ball2.display();

 //}
  
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
 
 
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  ground.display();

  //if (ball.isTouching(ground)) {

    //Matter.Body.setPosition(ball.body,{x :200,y:0});
  //}
 
  
 
}

