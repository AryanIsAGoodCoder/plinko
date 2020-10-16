class Plinko {

    constructor (x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    
        var options = {
            isStatic : true,
            
        }

        this.body = Bodies.polygon(this.x,this.y,6,this.radius/2,options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(0);
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

};