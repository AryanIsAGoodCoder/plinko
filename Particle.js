class Partical {

    constructor (x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2,
        }

        this.body = Bodies.polygon(this.x,this.y,6,this.radius/2,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(0);
        fill(this.color);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

};