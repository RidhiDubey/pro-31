const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var walk1,walk2,walk3;
var walk;
var thunder1,thunder2,thunder3;

var engine,world;

function preload(){
   walk1=loadImage("Walking Frame/walking_1.png");
   walk2=loadImage("Walking Frame/walking_2.png");
   walk3=loadImage("Walking Frame/walking_3.png");

   thunder1=loadImage("thunderbolt/1.png");
   thunder2=loadImage("thunderbolt/2.png");
   thunder3=loadImage("thunderbolt/3.png");
   

}

function setup(){
   engine = Engine.create();
   world = engine.world;

     canvas=createCanvas(1000,1000);
   drop1 = new Drop(50,50);
   drop2 = new Drop(100,50);
   drop3 = new Drop(150,50);
   drop4 = new Drop(200,50);
   drop5 = new Drop(250,50);
   drop6 = new Drop(300,50);
   drop7 = new Drop(350,50);
   drop8 = new Drop(400,50);
   drop9 = new Drop(450,50);
   drop10 = new Drop(500,50);
   drop11 = new Drop(550,50);
   drop12 = new Drop(600,50);
   drop13 = new Drop(50,50);
   drop14 = new Drop(100,50);
   drop15 = new Drop(150,50);
   drop16 = new Drop(200,50);
   drop17 = new Drop(250,50);
   drop18 = new Drop(300,50);
   drop19 = new Drop(350,50);
   drop20 = new Drop(400,50);
   drop21 = new Drop(450,50);
   drop22 = new Drop(500,50);
   drop23 = new Drop(550,50);
   drop24 = new Drop(600,50);
   drop25 = new Drop(50,50);
   drop26 = new Drop(100,50);
    
   ground=new Ground(500,600,100,20);
   umbrella=new Umbrella(500,300,40)
   boy=new Person(500,600,50,100)

  

}

function draw(){
   background("black");
   
   drop1.display() ;
   drop2.display() ;
   drop3.display() ;
   drop4.display() ;
   drop5.display() ;
   drop6.display() ;
   drop7.display() ;
   drop8.display() ;
   drop9.display() ;
   drop10.display() ;
   drop11.display() ;
   drop12.display() ;
   drop13.display() ;
   drop14.display() ;
   drop15.display() ;
   drop16.display() ;
   drop17.display() ;
   drop18.display() ;
   drop19.display() ;
   drop20.display() ;
   drop21.display() ;
   drop22.display() ;
   drop23.display() ;
   drop24.display() ;
   drop25.display() ;
   drop26.display() ;

   ground.display();
   umbrella.display();
   boy.display();

   Engine.update(engine);
}   

