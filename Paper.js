class Paper{
    constructor(){
        var opt={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(30,100,70,opt);
        this.radius = 70;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        push();
        rotate(this.body.angle);
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
};