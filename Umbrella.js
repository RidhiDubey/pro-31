class Umbrella{
    constructor(x,y,radius){
        var options={
           
            isStatic:0.4
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        fill("yellow");
        pop();
    }
}