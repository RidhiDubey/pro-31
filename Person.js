class Person{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.width=width;
        this.height=height;

        this.image=loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png");

        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 500,400,500,500)
    }
   
}