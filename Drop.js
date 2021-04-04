class Drop{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'density':0.3,
            }
       
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;
        fill("blue");
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
        
        
    }
}