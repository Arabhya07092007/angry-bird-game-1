const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2;
var log1,log2,log3,log4;
var box2,box3,box4,box5;
var bird;

var ground;


function setup(){
    var canvas = createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,70,70);
    box2 = new Box(360,300,70,70);
    box3 = new Box(200,220,70,70);
    box4 = new Box(350,220,70,70);
    box5 = new Box(290,120,70,70);

    ground = new Ground(400,height,800,20);

    pig1 = new Pig(270,350);
    pig2 = new Pig(270,180);

    log1 = new Log(270,250,250,PI/2);
    log2 = new Log(275,150,250,PI/2);
    log3  = new Log(250,80,125,PI/7);
    log4 = new Log(350,80,125,-PI/7);

    bird = new Bird(100,100);

}

function draw(){

    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log4.display();
    log3.display();
    bird.display();

}